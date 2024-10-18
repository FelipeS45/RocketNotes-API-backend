require("express-async-errors") // import do express async errors

const migrationsRun = require("./database/SQLite/migrations") // import do BD

const AppError = require("./utils/AppError") // import

const express = require("express") // import do express

const routes = require("./routes") // import

migrationsRun()

const app = express()
app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    }) 
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "internal server error"
  })
})

const PORT = 3333 
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))