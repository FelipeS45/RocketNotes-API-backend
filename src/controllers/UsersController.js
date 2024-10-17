const {hash, compare} = require("bcryptjs")

const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/SQLite")

class UsersController{
  /*
    index - GET no banco para listar vários registros
    show - GET no banco para exibir um registro específico
    create - POST no banco para criar um registro
    update - PUT no banco para atualizar um registro
    delete - DELETE no banco para remover um registro
  */

  async create(request, response){
    const {name, email, password} = request.body

    const database = await sqliteConnection()

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists){
      throw new AppError("E-mail já cadastrado")
    }

    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

    return response.status(201).json() // 201 = created
  }

  async update(request, response){
    const {name, email, password, old_password} = request.body
    const {id} = request.params
    
    const database = await sqliteConnection()

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id])

    if(!user){
      throw new AppError("Usuário não encontrado!")
    }
    
    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
      throw new AppError("Esse email já está em uso!") // Se estou tentando atualizar o email para um email que já existe e se o dono desse email possui um id diferente do meu, ERRO
    }

    user.name = name ?? user.name 
    user.email = email ?? user.email // ?? - nullish operator 
 
    if(password && !old_password){
      throw new AppError("É necessário informar a senha antiga para que ela seja redefinida")
    }

    if(password && old_password){
      const checkOldPassword = await compare(old_password, user.password)

      if(!checkOldPassword){
        throw new AppError("Senha antiga não confere!")
      }

      user.password = await hash(password, 8)
    }

    await database.run(`
      UPDATE users SET 
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?
      `, [user.name, user.email, user.password, id])

    return response.status(200).json()
  }
}

module.exports = UsersController //export