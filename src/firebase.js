import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5MiIp3Khv5-u4VMWAGVFtVchlgvQVj0w",
  authDomain: "linkedin-clone-50497.firebaseapp.com",
  projectId: "linkedin-clone-50497",
  storageBucket: "linkedin-clone-50497.appspot.com",
  messagingSenderId: "673431899777",
  appId: "1:673431899777:web:7c8de9d5d131e367c6c780",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };