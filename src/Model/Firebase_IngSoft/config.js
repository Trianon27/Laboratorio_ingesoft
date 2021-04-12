import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBO4xI3Pqtd4MqcCDNZRY0Yj5LQn9MzLO4",
    authDomain: "loginingesoft.firebaseapp.com",
    projectId: "loginingesoft",
    storageBucket: "loginingesoft.appspot.com",
    messagingSenderId: "120513535837",
    appId: "1:120513535837:web:1408d90c6408fd1a83d2b4",
    measurementId: "G-WVKPLY7JNP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  /*firebase.analytics();*/
  var db = firebase.firestore();
  var auth = firebase.auth();

  export  {auth};
  
  export {db};

