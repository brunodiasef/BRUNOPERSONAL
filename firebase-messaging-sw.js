// Service worker do Firebase Cloud Messaging — necessário para receber
// notificações push mesmo com o navegador fechado ou em segundo plano.
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC24id0ZK6glDg_1iKXzOW_ZQH83LQ3nns",
  authDomain: "bruno-personal-1fb4b.firebaseapp.com",
  databaseURL: "https://bruno-personal-1fb4b-default-rtdb.firebaseio.com",
  projectId: "bruno-personal-1fb4b",
  storageBucket: "bruno-personal-1fb4b.firebasestorage.app",
  messagingSenderId: "1096559421661",
  appId: "1:1096559421661:web:d2188912d8577ef5e81334"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Bruno Personal Trainer';
  const options = {
    body: (payload.notification && payload.notification.body) || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png'
  };
  self.registration.showNotification(title, options);
});
