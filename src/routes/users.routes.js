const { Router } = require("express") //import

const UsersController = require("../controllers/UsersController") // import

const usersRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Middleware ultrapassado!")

  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  }

  next()
}

const usersController = new UsersController()

// usersRoutes.use(myMiddleware) // aplicando middleware para todas as rotas possíveis

// usersRoutes.post("/", myMiddleware, usersController.create) // aplicando middleware apenas para essa rota

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes