// URL
import { API_URL } from "./url.js"
//  / variable generale qui stock les note
let tous_les_notes = []
// Recuperation de ressource
const contenaire_note = document.getElementById("contenaire-note")

// creation de la fonction
export async function display_note(notes = null){
    try{
        if(!notes){
            const response = await fetch(`${API_URL}/fil_actus`);
            if(!response.ok) throw new Error("Erreur du reseaux")
            notes = await response.json()
            console.log(notes)
            console.log(contenaire_note)
            tous_les_notes = notes
        }

        // vidage du contenaire pour eviter le double
        contenaire_note.innerHTML = ""

        notes.forEach(note => {
            console.log("NOTE", note)
            console.log("OWNER :", note.owner)
            const carte_note = document.createElement("div")
            carte_note.className = "carte-note"
            carte_note.dataset.userId = note.owner._id
            carte_note.innerHTML = `
            <div class = "profil-note">
                <div class ="image">
                   <img src="${note.owner.photo_profil}">
                </div>
                <div class = "name">
                    <span class ="user-name">${note.owner.user_name}</span>
                    <span class ="bio">${note.owner.bio}</span>
                </div>
            </div>
             
            <div class = "note">
                <span class ="title">${note.titre}</span>
                <span class ="description">${note.sous_titre}</span>
                <span class = "content">${note.note}</span>
            </div>`

            contenaire_note.appendChild(carte_note)
        });
    }catch(error){
        console.error(error)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    display_note()
})