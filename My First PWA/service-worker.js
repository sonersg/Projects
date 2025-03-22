const CACHE_NAME = 'my-pwa-cache-v1';

const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/1.jpg',
  '/musics/two.mp3',
  '/musics/three.mp3',
  '/musics/five.mp3',
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve cached assets when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
