const CACHE_NAME = 'ama-v1';
const ASSETS = [
  '/',
  '/pasada.html',
  '/manifest.json',
  '/icons/icon-maskable-192x192.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request)) // (4)
  );
});
