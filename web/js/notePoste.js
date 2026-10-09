import { fermer_popup_note} from "./auth.js"
import { display_note } from "./displayNote.js"
import { API_URL } from "./url.js"

// recuperation de ressource
console.log("Fichier Poste note chargé")
const titre = document.getElementById("note-title")
const description = document.getElementById("note-description")
const note = document.getElementById("note-text")
const cree_note_btn = document.getElementById("add-note-btn")
const annuler = document.getElementById("cancel-btn")

// fonction pour cree une note
async function creer_note() {
    const token = localStorage.getItem("token")
    console.log("token :", token)
    console.log("titre :" , titre.value)
    console.log("description :", description.value)
    console.log("note : ", note.value   )
    const responce = await fetch(`${API_URL}/notes`, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body : JSON.stringify({
            titre : titre.value,
            sous_titre : description.value,
            note : note.value
        })
        
    })
    const data = await responce.json()
    if(!responce.ok){
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

    
    if(responce.ok){
        // ouvrir_popup_note()
        fermer_popup_note()
        titre.value = "";
        description.value = "";
        note.value = ""

        titre.focus()
      }
   
    display_note()
    console.log(data)
}

cree_note_btn.addEventListener("click", async () => {
    console.log("CLICK")
    await creer_note()
})

annuler.addEventListener("click", () =>{
    fermer_popup_note()
})