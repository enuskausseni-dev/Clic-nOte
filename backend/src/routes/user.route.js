const express = require("express")
const auth_middlware = require("../middleware/auth.middleware")
const uploads = require("../middleware/upload.middlware")

const user_controller = require("../controllers/user.controller")
const user_schema = require("../schemas/user.schema")
const { valider } = require("../middleware/validate.middlware")

const route = express.Router()
route.use(auth_middlware)

route.get("/me", user_controller.voir_profil)
route.put("/me", valider(user_schema), user_controller.modifier_mon_profil)

route.put("/me/photo", uploads.single("photo"), user_controller.televerser_photo)

// voir le profil publique
route.get("/:userId", user_controller.get_user_by_id)
module.exports = route