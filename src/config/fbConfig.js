import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCysEoQaJH7XgHZLf4gxqB9U7erdgw4GJo",
  authDomain: "react-project-app-7651a.firebaseapp.com",
  databaseURL: "https://react-project-app-7651a.firebaseio.com",
  projectId: "react-project-app-7651a",
  storageBucket: "react-project-app-7651a.appspot.com",
  messagingSenderId: "664275467730"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
