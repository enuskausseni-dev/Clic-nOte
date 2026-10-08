const jwt = require("jsonwebtoken")

function auth_midd(req, res, next){
    try {
        // verifier l'autorisation
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({message : "token manquant"})
        }
        
        // verifier le type de token
        const[type, token] = authHeader.split(" ");
        console.log(type)
        console.log(token)
        if(type !=="Bearer" || !token){
            return res.status(401).json({message : "format token invalide"})
        }

        // decode
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decode
        console.log("JWT decoe :", decode)
      next();
    } catch (error) {
        console.error("Erreur : ", error)
        return res.status(401).json({message :"Token invalide ou expiré"})
    }
}

module.exports = auth_midd