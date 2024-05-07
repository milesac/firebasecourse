import fb from 'firebase/app'
import 'firebase/auth';
import  'firebase/storage';
import 'firebase/firestore';

const firebase = fb.default

const firebaseConfig = {
    apiKey: "AIzaSyAu-fYZBrmj39LmurZJD1Jpp5zUnlt-LBM",
    authDomain: "nextfire-286bf.firebaseapp.com",
    projectId: "nextfire-286bf",
    storageBucket: "nextfire-286bf.appspot.com",
    messagingSenderId: "366579704316",
    appId: "1:366579704316:web:cb0263a1e909f8bda71279"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  export const firestore = firebase.firestore();
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export const storage = firebase.storage();