import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAcnPD-PnDaJ-JVynpO9rM6p7-HNaedo84",
    authDomain: "project-management-app-19cf8.firebaseapp.com",
    projectId: "project-management-app-19cf8",
    storageBucket: "project-management-app-19cf8.appspot.com",
    messagingSenderId: "575273500793",
    appId: "1:575273500793:web:223cd716cdab626e3154a8"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;