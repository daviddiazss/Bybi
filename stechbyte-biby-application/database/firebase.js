import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCTPrLb6S5IiP8rYUAIHM_zBWDbVz4GFgo",
    authDomain: "bybi-7d04b.firebaseapp.com",
    projectId: "bybi-7d04b",
    storageBucket: "bybi-7d04b.appspot.com",
    messagingSenderId: "433876799231",
    appId: "1:433876799231:web:4ad72d6619b5c15a84c6ca",
    measurementId: "G-1FJSFH0QL9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()

  export default {
      firebase,
      db
  }