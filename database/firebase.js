import firebase from 'firebase'
import 'firebase/firestore'
// import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCOw_vlvDR6XWyCyqupHCJAg-srAtqVITo",
    authDomain: "miniproyectos-propios.firebaseapp.com",
    databaseURL: "https://miniproyectos-propios-default-rtdb.firebaseio.com",
    projectId: "miniproyectos-propios",
    storageBucket: "miniproyectos-propios.appspot.com",
    messagingSenderId: "614344745963",
    appId: "1:614344745963:web:5ee8c42ccafec840e1afae",
    measurementId: "G-R31GNYE5CK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default {
    firebase,
    db
}