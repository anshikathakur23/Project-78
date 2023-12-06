import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzrN4upguomdfNXeX0iAGjedkcHj7K6jg",
    authDomain: "project-78-9d48b.firebaseapp.com",
    projectId: "project-78-9d48b",
    storageBucket: "project-78-9d48b.appspot.com",
    messagingSenderId: "469782839476",
    appId: "1:469782839476:web:0aa5e836c3950b29fe97e1",
    measurementId: "G-610X24J597"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


