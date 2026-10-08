const auth_service =  require("../services/auth.services")

// enregistrement de l'utilisateur
async function inscription(req, res) {
    try{
        const utilisateur = await auth_service.inscrir_utilisateur(req.body)
        res.status(201).json(utilisateur)
    } catch(error){
        console.log(error.message)
        return res.status(400).json({message : error.message})
    }
}

// connextion de l'utilisateur
async function connextion(req, res){
    try{
        const resultat = await auth_service.connextion(req.body)
        if(!resultat){
            return res.status(401).json({message : "Email ou mot de passe invalide"})
        }
        res.status(200).json({
            token : resultat.token,
            utilisateur : resultat.utilisateur
        })
    } catch(error){
        res.status(401).json({message : error.message})
    }
}

module.exports = {
    inscription,
    connextion
}