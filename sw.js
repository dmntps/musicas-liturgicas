const CACHE_NAME = "liturgia-piedade-v2026-11-28-r3";
const CORE_SHELL_URLS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/app.js",
  "./js/dados_reais.js",
  "./manifest.json",
  "./icons/icon-192.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_SHELL_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) {
    // Nunca intercepta autenticação Apps Script ou embeds externos
    return;
  }

  const isMediaOrIcon = url.pathname.includes("/audios/") || url.pathname.includes("/icons/");

  if (isMediaOrIcon) {
    // Nunca corromper requisições Range (206 Partial Content) de scrubbing de MP3
    if (req.headers.has("range")) {
      event.respondWith(
        fetch(req).catch(async () => {
          const cached = await caches.match(url.pathname, { ignoreSearch: true }) || await caches.match(req, { ignoreSearch: true });
          return cached || Response.error();
        })
      );
      return;
    }

    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
          return networkRes;
        });
      })
    );
    return;
  }

  // Network-First para HTML/CSS/JS/JSON garantindo atualizações imediatas com fallback offline
  event.respondWith(
    fetch(req)
      .then((networkRes) => {
        if (networkRes && networkRes.status === 200) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return networkRes;
      })
      .catch(async () => {
        const cached = await caches.match(req, { ignoreSearch: true });
        if (cached) return cached;
        if (req.mode === "navigate") {
          return caches.match("./index.html");
        }
        return Response.error();
      })
  );
});
