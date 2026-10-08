const Note = require("../models/Notes")

//creer le note
async function creer_note(data, userId){
    const note =  await Note.create({...data, owner : userId})
    const resultat  = await note.populate("owner", "user_name bio photo_profil")
    return resultat
}

// modifier un note
async function modifier_note(note_id, new_date) {
    return await Note.findByIdAndUpdate({_id : note_id, owner : userId }, new_date,{returnDocument : "after"}).populate("user", "user_name bio photo_profil")
}

// supprimer une 
async function supprimer_note(note_id){
    return await Note.findByIdAndDelete({_id : note_id, owner : userId})
}

//voir tous les notes | fil d'actualité
async function fil_actus() {
    return await Note.find().sort({createdAt : -1}).populate("owner", "user_name bio photo_profil")
}

// voir le notes d'un utilisateur
async function voir_note_d_un_utilisateur(userId){
    return await Note.find({owner : userId})
}

// voir une note precice
async function voir_note_par_id(noteId){
    return await Note.findById(noteId)
}

module.exports = {
    creer_note,
    modifier_note,
    supprimer_note, 
    fil_actus,
    voir_note_d_un_utilisateur,
    voir_note_par_id       
}