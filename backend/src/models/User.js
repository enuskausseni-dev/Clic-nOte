const mongoose = require("mongoose")
const { _default } = require("zod")

const user_model = new mongoose.Schema({
    user_name :{
        type : String,
        required : true
    },

    email : {
        type : String,
        unique : true,
        required : true
    },
    passeword : {
        type : String,
        required : true
    },
    bio : {
        type : String,
        default : ""
    },
    photo_profil : {
        type : String,
        default :""
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
})

module.exports = mongoose.model("User", user_model)