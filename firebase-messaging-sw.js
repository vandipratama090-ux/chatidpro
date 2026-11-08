// firebase-messaging-sw.js
// Menerima notifikasi FCM saat halaman ChatID tertutup atau di latar belakang.
// File ini wajib berada di folder yang sama dengan index.html.
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCLeTl5YS1KlJftJj4nwl5i7BacHESa66g",
  authDomain: "vanzz-area.firebaseapp.com",
  projectId: "vanzz-area",
  storageBucket: "vanzz-area.firebasestorage.app",
  messagingSenderId: "867250539450",
  appId: "1:867250539450:web:36e10d6b045b1a4a75eb83",
});

// Notifikasi dengan payload "notification" ditampilkan otomatis oleh SDK.
firebase.messaging();

// Klik notifikasi: fokuskan halaman ChatID yang sudah terbuka, atau buka yang baru.
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if ("focus" in c) return c.focus();
      }
      return self.clients.openWindow("./");
    })
  );
});
