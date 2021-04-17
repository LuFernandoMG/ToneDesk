import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_FIREBASE,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

firebase.initializeApp(firebaseConfig);
export const modifier = firebase.firestore;
export const db = firebase.firestore();
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();