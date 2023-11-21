import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "../firebase-config";
const firebaseAppConfig = getFirebaseConfig();
const app = initializeApp(firebaseAppConfig);

import React from "react";
import ReactDOM from 'react-dom/client';
import Bedrock from "./Bedrock.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Bedrock />
)
