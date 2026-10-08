// importation de modele utilisateur
const User = require("../models/User")

// imporation de bcrypt
const bcrypt = require("bcrypt")

// generation du token
const {generateToken} = require("../utils/jwt")

async function inscrir_utilisateur(data){
    // destructuré le proprieté de data
    const {user_name, passeword, email} = data;
    // verifier dans la base données si l'utilisateur n'existe pas
    const utilisateur_exist  = await User.findOne({email})
    if(utilisateur_exist){throw new Error("email deja utilisé")}

    // hashé le mot de passe par bcrypt
    const hashed_passeword = await bcrypt.hash(passeword, 10)

    // on creer l'utilisateur
    const utilisateur = await User.create({
        user_name,
        email,
        passeword : hashed_passeword
    });

    return utilisateur
}

async function connextion(data) {
    const {email, passeword} = data

    //chercher l'utilisateur
    const utilisateur = await User.findOne({email})
    if(!utilisateur) { throw new Error("Email ou Mot de passe incorrect")}

    //comparé les mot de passe
    const passeword_bien = await bcrypt.compare(passeword, utilisateur.passeword)
    if(!passeword_bien){
        return null
    }

    // generer le token
    const token = generateToken(utilisateur)

    return {
        utilisateur,
        token
    }
}

module.exports = {
    inscrir_utilisateur,
    connextion
}
