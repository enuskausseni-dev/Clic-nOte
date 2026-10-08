const { z } = require("zod")

// schemas zod pour inscrir l'utilisateur
const inscription_schema = z.object({
    user_name : z.string().min(2, "le nom doit avoir au moins deux carateur"),
    email : z.string().email("email invalide"),
    passeword : z.string().min(6, "le mot de passe doit contenir au moi 6 caractere")
})

// schemas zod pour connecté l'utilisateur
const connexion_schema = z.object({
    email : z.string().email("email invalide"),
    passeword : z.string().min(6, "le mot de passe doit contenier au moins 6 caractere")
})

// exportation de modules
module.exports = {
    inscription_schema, connexion_schema
}