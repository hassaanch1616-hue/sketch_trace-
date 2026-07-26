/**
 * SketchTrace Production Service Worker (PWA)
 * Caches application shell, assets, icons, and sketches for 100% offline usage on GitHub Pages.
 */

const CACHE_NAME = 'sketchtrace-v1.0.0';

const APP_SHELL = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/sketchCatalog.js',
  './js/storage.js',
  './js/camera.js',
  './js/traceEngine.js',
  './js/screenLock.js',
  './js/admin.js',
  './manifest.json',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/maskable-icon-512.png'
];

// Install Event - Pre-cache App Shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching App Shell');
      return cache.addAll(APP_SHELL).catch((err) => {
        console.warn('[SW] Some non-critical shell assets failed to cache:', err);
      });
    })
  );
});

// Activate Event - Clean old caches & claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Purging old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate / Network-First with Cache Fallback Strategy
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);

  // Ignore cross-origin non-GET or browser extension requests
  if (requestUrl.origin !== location.origin && !event.request.url.includes('cdn.tailwindcss.com') && !event.request.url.includes('fonts.googleapis.com')) {
    return;
  }

  // Network-First with Cache Fallback for dynamic assets & images
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
