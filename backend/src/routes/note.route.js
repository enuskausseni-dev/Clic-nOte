const express = require("express")

// importation de middlewere
const authentification_midd = require("../middleware/auth.middleware")
const validation_midd = require("../middleware/validate.middlware")
const autorisation_midd = require("../middleware/authorize.owner.midd")

// importation du model
const Note = require("../models/Notes")

// importation du scheme zod
const schema_note = require("../schemas/notes.schema")

// importation du controlleur
const note_controller = require("../controllers/note.controller")




const route = express.Router()
// cretion de route publique
route.get("/fil_actus", note_controller.get_feed)

// creation de route protegés
route.use(authentification_midd)

// route POST
route.post("/notes", validation_midd.valider(schema_note), note_controller.create_note)


// exportation de route
module.exports = route