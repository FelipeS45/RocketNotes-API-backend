const AppError = require("../utils/AppError")

class UsersController{
  /*
    index - GET para listar vários registros
    show - GET para exibir um registro específico
    create - POST para criar um registro
    update - PUT para atualizar um registro
    delete - DELETE para remover um registro
  */

  create(request, response){
    const {name, email, password} = request.body

    if(!name){
      throw new AppError("Digite o seu nome")
    }

    response.status(201).json({name, email, password}) // status 201 = created
  }
}

module.exports = UsersController //export