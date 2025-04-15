// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIPJu1Y3-YNHlHnDs1jA7vcw3n1LemCqs",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "test-6cb3e",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "998898181287",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };