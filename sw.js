// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  sw.js  —  KSV University Website · Service Worker
//  Handles offline caching for PWA support
//  Version: 2.1.0
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const CACHE_NAME = 'ksv-v2.2.0';

// Yeh files offline me bhi available rahegi
const CACHE_FILES = [
  '/KSV-Discord-Website/index.html',
  '/KSV-Discord-Website/content.js',
  '/KSV-Discord-Website/og-banner.png',
  '/KSV-Discord-Website/manifest.json'
];

// ── INSTALL: files cache karo ─────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: purana cache hatao ──────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: pehle cache, phir network ──────────────────────
self.addEventListener('fetch', event => {
  // Sirf GET requests handle karo
  if (event.request.method !== 'GET') return;

  // External requests (fonts, analytics) — network se lao
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        // Cache me mila — return karo aur background me update karo
        fetch(event.request)
          .then(response => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, response));
            }
          })
          .catch(() => {});
        return cached;
      }

      // Cache me nahi mila — network se lao
      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200) return response;
          const clone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Offline aur cache me bhi nahi — index.html dikhao
          return caches.match('/KSV-Discord-Website/index.html');
        });
    })
  );
});
