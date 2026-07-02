/* Atlas Bíblico Interativo — service worker
   Páginas e dados: rede-primeiro (o cache é só fallback offline), para
   que cada visita veja a versão publicada — e nunca um HTML novo com
   dados velhos. Ativos estáveis e corpus: stale-while-revalidate. */
"use strict";
var CACHE = "atlas-biblico-v2";
var CORE = ["./", "index.html", "assets/logo.svg", "assets/icone.svg", "manifest.webmanifest"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function precisaFrescor(req, url) {
  if (req.mode === "navigate") return true;
  var p = url.pathname;
  return /\.html$/.test(p) || /(^|\/)dados-[^/]*\.js$/.test(p) || /manifest\.webmanifest$/.test(p);
}

self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(function (c) {
      return c.match(e.request).then(function (hit) {
        var net = fetch(e.request).then(function (res) {
          if (res && res.ok) c.put(e.request, res.clone());
          return res;
        }).catch(function () { return hit; });
        return precisaFrescor(e.request, url) ? net : (hit || net);
      });
    })
  );
});
