import { getStorage, ref } from "firebase/storage";
import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuEoDpomoJQ7cKU0go7zN8olREqFLEEQc",
    authDomain: "netflix-921ba.firebaseapp.com",
    projectId: "netflix-921ba",
    storageBucket: "netflix-921ba.appspot.com",
    messagingSenderId: "68115535962",
    appId: "1:68115535962:web:d8ceed15197a2a036e2063",
    measurementId: "G-MNTSV1EXVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const storage = getStorage(app);
export default storage;