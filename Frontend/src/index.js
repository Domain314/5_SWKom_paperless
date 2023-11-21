// import { initializeApp } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config.js';
const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);


import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

// import { initApi } from "./api/api";

async function initFirebaseApp() {
    // await initApi();
}

initFirebaseApp().then(() => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <App />
    )
});


