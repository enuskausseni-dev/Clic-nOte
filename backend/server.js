const express = require("express")
const path = require("path")
// dotenv
require("dotenv").config()

// creation de l'application
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname,"../web")))
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


// connextion base de données
const connextion_db = require("./config/db")
connextion_db()

const auth_routes = require("./src/routes/auth.routes")
const user_route = require("./src/routes/user.route")
const notes_route = require("./src/routes/note.route")
app.use(auth_routes)
app.use("/users",user_route)
app.use(notes_route)

app.listen(3000, ()=>{
    console.log(process.env)
    console.log("serveur demarer")
})
