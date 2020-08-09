import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6H7Z2VYuxeSBOx5oaeTTiE5dn7Jx6o00",
  authDomain: "test-website-c3991.firebaseapp.com",
  databaseURL: "https://test-website-c3991.firebaseio.com",
  projectId: "test-website-c3991",
  storageBucket: "test-website-c3991.appspot.com",
  messagingSenderId: "513409025936",
  appId: "1:513409025936:web:1ca5e5db020143ed031515",
  measurementId: "G-N82RCEBE4N",
});

const db = firebaseApp.firestore();

export default db;
