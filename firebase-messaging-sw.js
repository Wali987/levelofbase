importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDjTOf-hFj5pcjHkYiJnkElCz-Xmsc5o4s",
  authDomain: "levelofbase.firebaseapp.com",
  projectId: "levelofbase",
  storageBucket: "levelofbase.firebasestorage.app",
  messagingSenderId: "501026571235",
  appId: "1:501026571235:web:322122a29e7d7bc14b16d6"
});

const messaging = firebase.messaging();
