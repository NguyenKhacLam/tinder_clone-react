import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_OoPiOLm_voZZ19pAM12Sv6eWoF3NsCQ",
  authDomain: "tinder-clone-ee1ca.firebaseapp.com",
  databaseURL: "https://tinder-clone-ee1ca.firebaseio.com",
  projectId: "tinder-clone-ee1ca",
  storageBucket: "tinder-clone-ee1ca.appspot.com",
  messagingSenderId: "1019066786392",
  appId: "1:1019066786392:web:dc870cf0180cb3f3bd602d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
