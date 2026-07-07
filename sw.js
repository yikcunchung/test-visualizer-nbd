const CACHE = 'vis-frames-v1';

// Cache-first for all image assets — serves from local disk after first visit
self.addEventListener('fetch', event => {
  if (!event.request.url.match(/\.(webp|jpg|jpeg|png|svg)(\?|$)/i)) return;

  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) cache.put(event.request, response.clone());
          return response;
        }).catch(() => cached);
      })
    )
  );
});

// Remove old cache versions when a new SW activates
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
