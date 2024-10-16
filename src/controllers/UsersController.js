const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/SQLite")

class UsersController{
  /*
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
  */

  async create(request, response){
    const {name, email, password} = request.body

    const database = await sqliteConnection()

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists){
      throw new AppError("E-mail já cadastrado")
    }

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password])

    return response.status(201).json() // 201 = created
  }
}

module.exports = UsersController //export