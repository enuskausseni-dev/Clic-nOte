const mongoose = require("mongoose")

async function conectDB() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/quickNotesDB")
        console.log("mongoDB connecté")
    }catch(error){
        console.error("Erreur de connexion :", error)
    }
}

module.exports = conectDB;