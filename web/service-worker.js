const CACHE_NAME = "Clic-nOte-v1";

const FILES_TO_CACHE = [
    "./",
    "./web/index.html",
    "./css/style.css",
    "./css/responsive.css",
    "./css/profilStyle.css",
    "./manifest.json",
    "./icons/notebook.svg",
    "./icons/notebook.svg"
];

// installation du services worker
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// activation et suppression des anciens caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName))
            );
        })
    );
    self.clients.claim();
});

// interception des requêtes réseau et réponse avec le cache si disponible
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});