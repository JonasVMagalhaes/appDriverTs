importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCqVMmbs6UWc_HCuc9odsmAUwIcpCgGW4s",
    authDomain: "jonasmagalhaesdev.firebaseapp.com",
    databaseURL: "https://jonasmagalhaesdev.firebaseio.com",
    projectId: "jonasmagalhaesdev",
    storageBucket: "jonasmagalhaesdev.appspot.com",
    messagingSenderId: "579349592379",
    appId: "1:579349592379:web:8a0db8044306cabfb1df1e",
    measurementId: "G-2QH56V2G82"
});

const messaging = firebase.messaging();

// Both of them ain't working

//background notifications will be received here
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
    // Customize notification here
    const notificationTitle = 'Background Message Title'
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    }

    return self.registration.showNotification(notificationTitle, notificationOptions)
})

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
    const notificationTitle = 'Background Message Title'
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    }

    return self.registration.showNotification(notificationTitle, notificationOptions)
})