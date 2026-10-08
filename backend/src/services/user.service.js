const User = require( "../models/User" )

// voir le profil de l'utilisateur
async function cherche_mon_profil(userdId) {
    return await User.findById(userdId).select("-passeword")
}

//voir un utilisateur
async function voir_utilisateur(user_id){
    return await User.findById(user_id).select("user_name bio photo_profil")
}

// voir tous les utilisateurs 
async function voir_les_utilisateur() {
    return await User.find().select("-passeword")
}

//modidier un utilisateur
async function modifier_utilisateur(userId, new_data) {
        return await User.findByIdAndUpdate(userId, new_data,{returnDocument: 'after'}).select("-passeword")
}

module.exports = {
    cherche_mon_profil,
    voir_les_utilisateur,
    modifier_utilisateur,
    voir_utilisateur
}
