import { ouvrir_popup_inscription } from "./auth.js"

const profil = document.getElementById("profil-btn")

// recuperation de profil screen
const profil_content = document.getElementById("profil-contenaire")

// fonction pour desplay l'ecran de profil
export function ouvrir_ecran_profil(){
    profil_content.style.display = "flex"
}

export function fermer_ecran_profil(){
    profil_content.style.display = "none"
}

// recuperation de elements html
const back_btn = document.getElementById("retour") //retour
const setting_btn = document.getElementById("parametre") //paramettre

// recuperation des identité des utilisateur
const photo_profil = document.getElementById("photo-profil")
const nom = document.getElementById("nom")
const bio = document.getElementById("bio")
// fonction pour display leprofil de l'utilisateur connecter
async function profil_show(){
    const token = localStorage.getItem("token")
    if(!token){
        console.log("utilisateur non conneté")
        ouvrir_popup_inscription() 
        return
    }
    const response = await fetch("/users/me",
        {
            method: "GET",
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        }
    )

    const data = await response.json()
    console.log("profil", data.user_name)
    nom.textContent = data.user_name
    bio.textContent = data.bio
    photo_profil.src = data.photo_profil
}

profil.addEventListener("click", async () =>{
    console.log("clik")
    ouvrir_ecran_profil()
    await profil_show()
})

back_btn.addEventListener("click", () => {
    fermer_ecran_profil()
})