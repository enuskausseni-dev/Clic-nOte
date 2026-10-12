
setTimeout(() =>{
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("app").style.display = "block"
}, 500)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration =
        await navigator.serviceWorker.register(
          "./service-worker.js"
        );

      console.log("Service Worker enregistré :", registration);
    } catch (error) {
      console.error("Erreur Service Worker :", error);
    }
  });
}

import "./auth.js"
import "./displayNote.js"
import "./displayProfile.js"
import "./notePoste.js"
import "./storage.js"
import "./uplodProfil.js"
import "./url.js"