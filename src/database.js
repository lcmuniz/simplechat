import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAamWN0xXD5ASnjlLv-mJZGCMIoEj9QeG4",
  authDomain: "simple-chat-78f87.firebaseapp.com",
  databaseURL: "https://simple-chat-78f87.firebaseio.com",
  projectId: "simple-chat-78f87",
  storageBucket: "simple-chat-78f87.appspot.com",
  messagingSenderId: "976947114024",
  appId: "1:976947114024:web:c6a57f2d2864e147fdc51d",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
