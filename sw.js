/* Arshad Kiryana - service worker
   Menu internet ke bagair bhi khulta hai. Naya version dene par V ka number badal dein. */
const V = "kq-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "favicon.svg"];
const EXTRA = ["fonts.googleapis.com", "fonts.gstatic.com", "cdnjs.cloudflare.com", "upload.wikimedia.org"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  // page: pehle net (taake update mile), net na ho to cache
  if (r.mode === "navigate") {
    e.respondWith(
      fetch(r).then((res) => { const c = res.clone(); caches.open(V).then((ca) => ca.put("index.html", c)); return res; })
        .catch(() => caches.match("index.html"))
    );
    return;
  }
  const same = u.origin === location.origin;
  if (!same && !EXTRA.includes(u.hostname)) return;
  // baaqi: cache pehle, saath saath update (fonts, QR library, photos)
  e.respondWith(
    caches.match(r).then((hit) => {
      const net = fetch(r).then((res) => { if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(V).then((ca) => ca.put(r, c)); } return res; }).catch(() => hit);
      return hit || net;
    })
  );
});
