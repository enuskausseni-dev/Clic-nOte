function valider(schema){
    return (req, res, next) =>{
        const resultat = schema.safeParse(req.body);
        if(!resultat.success){
           console.log(resultat.error.issues)
           console.error(resultat.error.stack)
            return res.status(400).json({
                message : "Donnees invalide",
                errors : resultat.error.flatten()
            });
        }

        req.body = resultat.data

        next()
    }
}

module.exports = {
    valider
}