const { Router } = require("express") //import

const NotesController = require("../controllers/NotesController") // import

const notesRoutes = Router()

const notesController = new NotesController()

notesRoutes.post("/:user_id", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)
notesRoutes.get("/", notesController.index)

module.exports = notesRoutes