const config = {
    apiKey: "AIzaSyA_R_vPbuQ5P4tx8gMDztaH0r4tQkhugvI",
    authDomain: "swkom-paperless.firebaseapp.com",
    projectId: "swkom-paperless",
    storageBucket: "swkom-paperless.appspot.com",
    messagingSenderId: "813851604834",
    appId: "1:813851604834:web:da0e39c49f81e9d94d5e3b"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}
