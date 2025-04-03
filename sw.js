const CACHE_NAME = 'ama-v1';
const ASSETS = [
  '/',
  '/pasada.html',
  '/manifest.json',
  '/icons/icon-maskable-192x192.png', // Ruta corregida
  '/icons/icon-any-512x512.png' // Añadido ícono "any"
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
