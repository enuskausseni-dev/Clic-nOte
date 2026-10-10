// importation url
import { API_URL } from "./url.js"

const nom = document.getElementById("name");
const email = document.getElementById("email")
const mot_de_passe = document.getElementById("password")

// button de profile
// const profil_btn = document.getElementById("profil-btn")


const erreur = document.getElementById("erreur")

const sing_btn =document.getElementById("sing-up-btn")
const connexion = document.getElementById("connexion")
// recuperation de boite
const popup_note = document.getElementById("popup-note")
const popup_connexion = document.getElementById("popup-connexion")

// fonction fermer popup
export function ouvrir_popup_note(){
    popup_note.style.display = "flex"
}

// fermer la popup note
export function fermer_popup_note(){
    popup_note.style.display = "none"
}

// fonction pour nettoyer les erreurs
function cleanErrors() {
    document.querySelectorAll(".error").forEach(element =>{
        element.textContent ="";
    })
}

async function sing_up() {
    cleanErrors()
    const response = await fetch(`${API_URL}/inscription`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            user_name : nom.value,
            email : email.value,
            passeword : mot_de_passe.value
        })
    })

    const data = await response.json()
    console.log("URL :", response.url);
    console.log("Statut :", response.status, data);
    if(!response.ok){
        console.log(data.error)
        const errors = data.errors?.fieldErrors;
        if (errors){
            for(const [field, messages] of Object.entries(errors)){
                const errorElement = document.getElementById(`${field}_error`);
                if(errorElement){
                    errorElement.textContent = messages[0]
                }else{
                    erreur.textContent = data.message || "Une erreur est survenue"
                }
            }
        }
    }

    
    if(response.ok){
        nom.value = "";
        email.value = "";
        mot_de_passe.value = ""

        nom.focus()
    }
    console.log(data)
}

sing_btn.addEventListener("click", async () => await sing_up())


// fonction pour la connexion
const emailConn = document.getElementById("email-login")
const mot_de_passe_conn = document.getElementById("password-login")
async function login() {
    cleanErrors()
    const response = await fetch(`${API_URL}/connexion`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            email : emailConn.value,
            passeword : mot_de_passe_conn.value
        })
    })

    const data = await response.json()
    console.log("URL :", response.url);
    console.log("Statut :", response.status, data);
    if(!response.ok){
        console.log(data.error)
        const errors = data.errors?.fieldErrors;
        if (errors){
            for(const [field, messages] of Object.entries(errors)){
                const errorElement = document.getElementById(`${field}_errorc`);
                if(errorElement){
                    errorElement.textContent = messages[0]
                }else{
                    erreur.textContent = data.message || "Une erreur est survenue"
                }
            }
        }
    }

    
    if(response.ok){
        console.log(data)
        localStorage.setItem("token", data.token)
        localStorage.setItem("account", JSON.stringify(data.utilisateur))
        console.log("connextion reussie")
        alert("connextion reussie")
        fermer_popup_connexion();
        ouvrir_popup_note()
        emailConn.value = "";
        mot_de_passe_conn.value = ""

        emailConn.focus()
    }
    
}

connexion.addEventListener("click", async () => await login())

// onction pour ouvrir lepopup d'inscription 
const popup_inscription = document.getElementById("popup-inscription")
export function ouvrir_popup_inscription (){
    popup_inscription.style.display = "flex"
}

// fonction de verification de session 
export async function verifier_session() {
    const token = localStorage.getItem("token")
    if(!token){
       return false
    }
    const response = await fetch(`${API_URL}/users/me`,
        {
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        }
    )
    if(response.ok){
        
        return true;
    }
    localStorage.removeItem("token");
    localStorage.removeItem("account")
}
// appel à l'evenement
document.getElementById("add-note").addEventListener("click", async  () => {
    // ouvrir_popup_inscription()
    const connect = await verifier_session()
    if(connect){
        ouvrir_popup_note()
    }else{
        ouvrir_popup_inscription()
    }
})

// fonction pour le popup de connexion
export function ouvrir_popup_connexion(){
    document.getElementById("popup-connexion").style.display = "flex"
}

export function fermer_popup_connexion(){
    document.getElementById("popup-connexion").style.display = "none"
}


// appel à l'évenement
document.getElementById("login-btn").addEventListener("click",  () =>{
    popup_inscription.style.display = "none"
    ouvrir_popup_connexion()
    
})

// ouvrir cran de profil
// profil_btn.addEventListener("click", async() => {
//     ouvrir_ecran_profil()
//     // await profil_show()
// })
