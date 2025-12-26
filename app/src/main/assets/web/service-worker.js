self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("levia-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./css/index.css",
        "./js/index.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});