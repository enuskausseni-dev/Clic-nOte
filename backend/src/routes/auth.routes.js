const express = require("express")

const auth_controller = require("../controllers/auth.controller")
const {valider} = require("../middleware/validate.middlware")
const auth_chemas = require("../schemas/auth.schema")

const routes = express.Router()

routes.post("/inscription", valider(auth_chemas.inscription_schema), auth_controller.inscription)
routes.post("/connexion", valider(auth_chemas.connexion_schema), auth_controller.connextion)

module.exports = routes