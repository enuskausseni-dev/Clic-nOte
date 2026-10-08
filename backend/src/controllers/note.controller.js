const note_services = require("../services/note.service")

// creer
exports.create_note = async (req, res) =>{
    try{
        const { userId } = req.user
        const note = await note_services.creer_note(req.body, userId)
        res.status(200).json(note)
    }catch(error){
        console.log(error)
        return res.status(500).json({message : "Erreur internedu serveur"})
    }
}

// modifier
exports.update_note = async (req, res) =>{
    try{
        const noteId = req.params.noteId
        const note = await note_services.modifier_note(noteId, req.body)
        if(!note){
            return res.status(404).json({message : "Note introuvable"})
        }
        res.status(200).json(note)
    }catch(error){
        return res.status(500).json({message : "Erreur du serveur"})
    }
}

// supprimer
exports.delete_note = async (req, res) =>{
    try{
        const supp = await note_services.supprimer_note(req.params.noteId)
        res.status(200).json(supp)                      
    }catch(error){
        return res.status(500).json({message : "Erreur du serveur"})
    }
}

// voir mes notes 
exports.get_my_notes = async (req, res) =>{
    try{
        const userId = req.user.userId
        const notes = await note_services.voir_note_d_un_utilisateur(userId)
        res.status(200).json(notes)
    }catch(error){
        console.error(error)
        res.status(500).json({message : "erreur du serveur"})
    }
}

// voir les notes d'un autres utilisateur
exports.get_user_notes = async (req, res) =>{
    try{
        const userId = req.params.userId
        const notes = await note_services.voir_note_d_un_utilisateur(userId)
        res.status(200).json(notes)
    }catch(error){
        console.error(error)
    }
}

// voir une note precise
exports.get_note_by_id = async (req, res) =>{
    try{
        const noteId = req.params.noteId
        const note = await note_services.voir_note_par_id(noteId)
        if(!note){
            return res.status(404).json({message : "Note introuvable"})
        }
    }catch(error){
        console.error(error)
        return res.statut(500).json({message : "erreur interne u serveur"})
    }
}

// voir le fille d'actualité
exports.get_feed = async (req, res) =>{
    try{
        const notes = await note_services.fil_actus()
        res.status(200).json(notes)
    }catch(error){
        console.error(error)
        return res.status(500).json({message :"erreur interne du serveur"})
    }
}