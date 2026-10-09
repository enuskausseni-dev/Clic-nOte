const mongoose = require("mongoose")

async function conectDB() {
    try{
        await mongoose.connect(process.env.MONGO_CLIC_URL)
        console.log("mongoDB connecté")
    }catch(error){
        console.error("Erreur de connexion :", error)
    }
}

module.exports = conectDB;