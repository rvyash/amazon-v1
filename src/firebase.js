// firebase.js: Firebase configuration file
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4cJMs6D6FzDKQF5Le3jFq2ofVyIRXf18",
    authDomain: "shop1-707c1.firebaseapp.com",
    databaseURL: "https://shop1-707c1.firebaseio.com",
    projectId: "shop1-707c1",
    storageBucket: "shop1-707c1.appspot.com",
    messagingSenderId: "675158171475",
    appId: "1:675158171475:web:405e4626d12ecb6799cba6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { provider, auth };
export default db;
