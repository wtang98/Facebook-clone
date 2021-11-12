import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAgeM1L2EJN7eI3ZGs-ZBMgccE_MOtIQg",
    authDomain: "facebook-clone-46dc2.firebaseapp.com",
    projectId: "facebook-clone-46dc2",
    storageBucket: "facebook-clone-46dc2.appspot.com",
    messagingSenderId: "971141510029",
    appId: "1:971141510029:web:ee5dcca13944940fe583c4",
    // measurementId: "G-R77582KVZ2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const firebaseApp = firebase.intializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new GoogleAuthProvider();

export default Firebase;
// export default db;