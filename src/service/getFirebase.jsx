import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvplm0ZgC8aa4q7vo-XX6U0R1fRzHQwHQ",
    authDomain: "patagonizate-7f955.firebaseapp.com",
    projectId: "patagonizate-7f955",
    storageBucket: "patagonizate-7f955.appspot.com",
    messagingSenderId: "265154527690",
    appId: "1:265154527690:web:87de535c1692a340514f33"
  };
  
const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
    return firebase.firestore(app)
}
