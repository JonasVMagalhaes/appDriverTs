import * as firebase from 'firebase/app';
import * as messaging from 'firebase/messaging';
import localforage from 'localforage';

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token')
    },

    init: async function () {
        firebase.initializeApp({
            apiKey: "AIzaSyCqVMmbs6UWc_HCuc9odsmAUwIcpCgGW4s",
            authDomain: "jonasmagalhaesdev.firebaseapp.com",
            databaseURL: "https://jonasmagalhaesdev.firebaseio.com",
            projectId: "jonasmagalhaesdev",
            storageBucket: "jonasmagalhaesdev.appspot.com",
            messagingSenderId: "579349592379",
            appId: "1:579349592379:web:8a0db8044306cabfb1df1e",
            measurementId: "G-2QH56V2G82"
        })

        try {
            const tokenInLocalForage = await this.tokenInlocalforage()
            if (tokenInLocalForage !== null) {
                return tokenInLocalForage
            }

            const status = await Notification.requestPermission();
            if (status && status === 'granted') {
                // Public Key:
                // BFt5xys3bFtHzzycj3RlBSRPoRfUHWKuugZ-5xvlnPM4PiNGdj52o98lhOPDs69BnVdx1_TXGTBG4w_3-gop5l0

                // Private Key:
                // mFEpJa9S7nQlnC1lgPhVr81Gj59TpfRamkGkIa8lLeM
                const fcm_token = await messaging.getToken({
                    vapidKey: 'BFt5xys3bFtHzzycj3RlBSRPoRfUHWKuugZ-5xvlnPM4PiNGdj52o98lhOPDs69BnVdx1_TXGTBG4w_3-gop5l0'
                })

                if (fcm_token) {
                    localforage.setItem('fcm_token', fcm_token)
                    console.log('fcm token', fcm_token)
                    return fcm_token
                }
            }
            console.log(status);


        } catch (error) {
            console.error(error)
            return null
        }
    }
}
export { firebaseCloudMessaging }