// Service worker mínimo — necessário apenas para permitir a instalação do app.
// Não faz cache de nada: o app sempre busca a versão mais recente online.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
