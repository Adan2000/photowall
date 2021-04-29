import firebase from "firebase/app";
import "firebase/database";


var firebaseConfig = {
  apiKey: "AIzaSyCjcWoX5Xx9-8dgJ2sIMdpWjPznZ_nY2Yc",
  authDomain: "photowall-150fc.firebaseapp.com",
  databaseURL: "https://photowall-150fc-default-rtdb.firebaseio.com",
  projectId: "photowall-150fc",
  storageBucket: "photowall-150fc.appspot.com",
  messagingSenderId: "715731301232",
  appId: "1:715731301232:web:e9dd910cd2f10df7c315b5",
  measurementId: "G-MJ7H0XD117"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()

export {database}

//test 