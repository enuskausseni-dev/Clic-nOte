const mongoose = require("mongoose")
const { required } = require("../schemas/user.schema")

const note_model = new mongoose.Schema({
    titre : {
        type : String,
        required : true
    },
    sous_titre : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : true
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
   
},
 {
        timestamps : true
}
)

module.exports = mongoose.model("Notes", note_model)