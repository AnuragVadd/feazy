import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBRqHwNN0-X3wUH8dD2FbBY9ZIrrKBr1hA",
    authDomain: "feazy-db655.firebaseapp.com",
    databaseURL: "https://feazy-db655.firebaseio.com",
    projectId: "https://feazy-db655.firebaseio.com",
    storageBucket: "feazy-db655.appspot.com",
    messagingSenderId: "681649812805",
    appId: "1:681649812805:web:2e60ddc74778cf990c7a2c"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
   }
  // firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const db = firebase.database()