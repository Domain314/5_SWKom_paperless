import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
    getFirestore,
    getDoc,
    setDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';

const acceptedMails = [
    'domain3141@gmail.com',
    'artjom@27vier.com',
    'corvettekainz@gmail.com',
    'fasziendynamik.mailer@gmail.com',
    'anitramzniak@gmail.com'
];
var deviceKey = localStorage.getItem('device-id');


// Authentification
export async function checkUser(callback) {
    // console.log(deviceKey);

    if (deviceKey === null) {
        console.log("no device id");

        signIn(callback);
        return;
    }

    const snapshot = await getDoc(doc(getFirestore(), 'authentication', deviceKey))

    if (!snapshot.exists()) {
        console.log("wrong device id");
        signIn(callback);
    } else {
        correctLogin(deviceKey, callback);
        return;
    }
    // wrongLogin();
}

function signIn(callback) {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken.split('.')[1];
            // The signed-in user info.
            const user = result.user;

            // console.log(token);

            if (acceptedMails.includes(user.email)) {
                console.log('correct');

                correctLogin(token, callback);//.then(() => { checkUser(); });
            } else {
                console.log(user.email);
                wrongLogin();
            }

        }).catch((error) => {
            console.log('error');
            console.log(error);

        });
}

async function correctLogin(token, callback) {
    console.log('accepted');
    localStorage.setItem('device-id', token);
    deviceKey = token;
    // addLogoutButton();
    // document.getElementById('logout-container').innerHTML = token;
    callback();
    await setDoc(doc(getFirestore(), 'authentication', token), { user: token, timestamp: serverTimestamp() });
}

function wrongLogin() {
    document.body.innerHTML = `<h1>Danke für deinen Login.</h1><p>Einen schönen Tag noch. :)</p>`
}

export function logout() {
    localStorage.removeItem('device-id');
    deviceKey = null;
    document.location.reload();
}

function addLogoutButton() {
    const logoutButton = document.createElement('button');
    logoutButton.id = 'logout';
    logoutButton.innerHTML = 'Logout';
    const container = document.getElementById('logout-container');
    container.innerHTML = '';
    container.appendChild(logoutButton);
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('device-id');
        deviceKey = null;
        document.location.reload();
    })
}
