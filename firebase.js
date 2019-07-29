import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnsrJrnUkKEdJrV9WDR-vxZeuuA8Q-2W4",
  authDomain: "react-todo-4bba4.firebaseapp.com",
  databaseURL: "https://react-todo-4bba4.firebaseio.com",
  projectId: "react-todo-4bba4",
  storageBucket: "react-todo-4bba4.appspot.com",
  messagingSenderId: "958431706722",
  appId: "1:958431706722:web:65f902755d27d658"
});

const db = firebaseApp.firestore();

export { db };
