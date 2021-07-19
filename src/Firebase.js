import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3IlFInQ9DLncDFMUITJtmtTV1nb9BHW0",
  authDomain: "wine-tracker-d51ea.firebaseapp.com",
  projectId: "wine-tracker-d51ea",
  storageBucket: "wine-tracker-d51ea.appspot.com",
  messagingSenderId: "451706477141",
  appId: "1:451706477141:web:c0d3f75eb7069703d2d2dc",
  measurementId: "G-C4CTFGM6ZX"
};


firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;