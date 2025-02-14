
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAZrxfdnqe5az6gHwqaRnxz_yiq-bvBpd4",
    authDomain: "contact-c3423.firebaseapp.com",
    projectId: "contact-c3423",
    storageBucket: "contact-c3423.firebasestorage.app",
    messagingSenderId: "1058131742820",
    appId: "1:1058131742820:web:5dea9b981af99a86114f71",
    measurementId: "G-2XHFJ0R9KL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export { db };
