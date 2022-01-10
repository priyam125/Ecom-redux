import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAx_amdCUkzObvmXRIDk10zy9n9MrxUmJU",
    authDomain: "ecom-redux-auth.firebaseapp.com",
    projectId: "ecom-redux-auth",
    storageBucket: "ecom-redux-auth.appspot.com",
    messagingSenderId: "336702569660",
    appId: "1:336702569660:web:69d9757204da65969224b9",
    measurementId: "G-EZ6ND3ZNZZ"
  };
  
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
//provider.setCustomParameters({prompt: 'auto'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase