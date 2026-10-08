function authorizeOwner(Model, options = {}){
    const {paramName = "id", owenerField = "owner"} = options
    return async (req, res, next) =>{
        try{
            const resultant = await Model.findById(req.params[paramName])
            if(!resultant){
                res.status(404).json({message : "ressource introuvable"})
            }

            // autoriser l'amin
            if(req.user.role === "admin"){
                req.resource = resultant
                return next()
            }
            // autorizer le propriete
            if(resultant[owenerField].toString() === req.user.userId){
                req.resource = resultant
                return next()
            }

            return res.status(403).json({message :"vous n'etes pas autorisé"})
        } catch(error){
            return res.status(500).json({message : "erreur interne du serveur"})
        }
    }
}

module.exports = authorizeOwner