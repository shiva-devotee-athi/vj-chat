import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZC2zkX0lFFLfkB1L2A2QUC1nGI2RLgS0",
  authDomain: "vj-chat-68d36.firebaseapp.com",
  projectId: "vj-chat-68d36",
  storageBucket: "vj-chat-68d36.appspot.com",
  messagingSenderId: "564389867642",
  appId: "1:564389867642:web:ebc3499da44559364f4bc3"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const projectFirestore= firebase.fireStore();
const projectAuth= firebase.auth();
const timeStamp= firebase.fireStore.Timestamp;

export {projectFirestore,projectAuth,timeStamp}