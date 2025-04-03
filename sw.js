const CACHE_NAME = 'ama-v1';
const ASSETS = [
  '/app-trabajador/',
  '/app-trabajador/pasada.html',
  '/app-trabajador/manifest.json',
  '/app-trabajador/icono-192.png',
  '/app-trabajador/icono-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
});
