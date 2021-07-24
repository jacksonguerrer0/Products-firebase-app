import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAc5yyXDESTVnsWPdBXk0bowIhHkkcJeUY",
    authDomain: "base-datos-login.firebaseapp.com",
    projectId: "base-datos-login",
    storageBucket: "base-datos-login.appspot.com",
    messagingSenderId: "324502953374",
    appId: "1:324502953374:web:caf01d58af6baf6c168a8f"
};
//inicializa firebase
firebase.initializeApp(firebaseConfig);


//referencia de la base de datos 
const db = firebase.firestore();
//permite autenticacion con google 
const google = new firebase.auth.GoogleAuthProvider()


 
//se exporta 
export {firebase, db, google}









// SEGUNDA FORMA CON firebase

// import firebase from 'firebase/app'


// var firebaseConfig = {
//     apiKey: "AIzaSyAjvV1fWmqzyQU6sUp8gd1-DwSaCtVKMZQ",
//     authDomain: "plantilla-firebase-crud.firebaseapp.com",
//     projectId: "plantilla-firebase-crud",
//     storageBucket: "plantilla-firebase-crud.appspot.com",
//     messagingSenderId: "491279397817",
//     appId: "1:491279397817:web:72aba39c80750aa447fc68"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);