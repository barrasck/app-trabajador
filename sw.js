const CACHE_NAME = 'ama-v2'; // Cambia versión
const ASSETS = [
  '/app-trabajador/',
  '/app-trabajador/pasada.html',
  '/app-trabajador/manifest.json',
  '/app-trabajador/icono-192.png',
  '/app-trabajador/icono-512.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .catch(() => caches.match(e.request))
  );
});
