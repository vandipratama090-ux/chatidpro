/* Service worker CHAT ID: memuat SW Firebase (notifikasi) + handler fetch agar bisa diinstal */
try { importScripts('./firebase-messaging-sw.js'); } catch (e) { console.warn('firebase-messaging-sw.js gagal dimuat', e); }

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(function () {
    return e.request.mode === 'navigate' ? caches.match('./') : Response.error();
  }));
});
