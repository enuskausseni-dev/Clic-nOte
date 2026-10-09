console.log("Mon fichier uploadProfil.js est chargé !");
import { API_URL } from "./url.js"

// import { fermer_ecran_profil } from "./displayProfile"

// recuperer les element html
const photoProfil = document.getElementById("photo-profil-form")
const formProfil = document.getElementById("form-profil")
const previewPhoto = document.getElementById("apercu-photo");
const popupProfil = document.getElementById("update-profile");

const user_name_upload = document.getElementById("user-name-uplod")
const bio_upload = document.getElementById("bio-upload-profil")
console.log(user_name_upload);
console.log(bio_upload);
const modifierInfosProfilBtn = document.getElementById("modifier-rofil")

// fonction pour ouvrir le popup de modification du profil
function ouvrirPopupProfil() {
    popupProfil.style.display = "flex";
}
// fonction pour fermer le popup de modification du profil
function fermerPopupProfil() {
    popupProfil.style.display = "none";
}

// fonction pour modifier les informations du profil
async function modifierInfosProfil() {
    console.log("Nom :", user_name_upload.value);
    console.log("Bio :", bio_upload.value);
    const token = localStorage.getItem("token")
    console.log(token)
    const user_name = user_name_upload.value
    const bio = bio_upload.value

    const response = await fetch(`${API_URL}/users/me`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_name, bio })
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data);
    }
}

async function modifierPhotoProfil() {
    const photo = photoProfil.files[0]
    if(!photo){
        console.log("Aucun photo selectionner")
        return
    }
    const token = localStorage.getItem("token")
    console.log(token)

    const formData = new FormData()
    formData.append("photo", photo)
    const response = await fetch(`${API_URL}/users/me/photo`, 
        {
            method : "PUT",
            headers : {
                "Authorization" : `Bearer ${token}`
            },
            body : formData
        }
    );
    const data = await response.json()
    console.log(data)

    if (response.ok) {
    const imageProfil = document.getElementById("photo-profil");

    imageProfil.src = data.photo_profil + "?t=" + Date.now();
}
   
}

formProfil.addEventListener("submit", async (event) =>{
    event.preventDefault()

    // if (photoProfil.files[0]) {
    // }
    await modifierPhotoProfil();
    await modifierInfosProfil()
    fermerPopupProfil()
})

photoProfil.addEventListener("change", () => {
    const photo = photoProfil.files[0];

    if (photo) {
        previewPhoto.src = URL.createObjectURL(photo);
    }
});

modifierInfosProfilBtn.addEventListener("click", async () => {
    ouvrirPopupProfil();
    // fermer_ecran_profil()
});