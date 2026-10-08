const service_utilisateur = require("../services/user.service")

// voir les utilisateur
exports.get_users = async (req, res) =>{
    try{
        const utilitisateurs = await service_utilisateur.voir_les_utilisateur()
        res.status(200).json(utilitisateurs)
    } catch(error){
        return res.status(500).json({message : error.message})
    }
}

// voir mon profil
exports.voir_profil = async(req, res) =>{
    try{
        const userId = req.user.userId
        const user = await service_utilisateur.cherche_mon_profil(userId)
        if(!user){
            return res.status(400).json({message : "utilisateur introuvable"})
        }

        res.status(200).json(user)
    } catch(error){
       console.error(message.error)
       return res.status(500).json({message : "Erreur du server"})
        
    }
}

exports.modifier_mon_profil = async(req, res) =>{
    try{
        const userId = req.user.userId
        const user = await service_utilisateur.modifier_utilisateur(userId, req.body)
        res.status(200).json(user)
    } catch(error){
        return res.status(500).json({message : "erreur interne du serveur"})
    }
}

exports.televerser_photo = async(req, res) =>{
    try{
        console.log(`FILE :${JSON.stringify(req.file)}`)
        console.log(`User :${JSON.stringify(req.user)}`)
        if(!req.file){
                return res.status(400).json({message : "aucun fichier n'a été téléversé"})
            }
        const userId = req.user.userId
        const photoUrl = `/uploads/profiles/${req.file.filename}`

        console.log(`USER ID ${userId}`);
        console.log(`PHOTO URL ${photoUrl}`)
        const user = await service_utilisateur.modifier_utilisateur(userId,
             { photo_profil: photoUrl }
            )
        console.log(`USER ${user}`)
        res.status(200).json(user)
    } catch(error){
        console.error(error)
        return res.status(500).json({message : "erreur interne du serveur"})
    }
}


// voir un utilisateur
exports.get_user_by_id = async (req, res) =>{
    try{
        const user = await service_utilisateur.voir_utilisateur(req.params.userId)
        res.status(200).json(user)
    }catch(error){
        return res.status(500).json({message : "Erreur interne du server"})
    }
}
