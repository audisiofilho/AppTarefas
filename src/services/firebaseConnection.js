import firebase from "firebase/app";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyACtIKEvwI-SUE1RJ8GWpHdmmSmQLQUSZk",
  authDomain: "meuapp-981c4.firebaseapp.com",
  databaseURL: "https://meuapp-981c4-default-rtdb.firebaseio.com",
  projectId: "meuapp-981c4",
  storageBucket: "meuapp-981c4.appspot.com",
  messagingSenderId: "355375654910",
  appId: "1:355375654910:web:3e5bb3c2bd2c84131442af",
  measurementId: "G-4D7TWCQD29",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;