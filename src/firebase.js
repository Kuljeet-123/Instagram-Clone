import firebase from 'firebase';
  
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7DAmTzHGh9lfwM1W747sNDVlMwWMY5XU",
    authDomain: "instagram-clone-13e63.firebaseapp.com",
    databaseURL: "https://instagram-clone-13e63.firebaseio.com",
    projectId: "instagram-clone-13e63",
    storageBucket: "instagram-clone-13e63.appspot.com",
    messagingSenderId: "247047246517",
    appId: "1:247047246517:web:498418098bc6ed388ca4fc",
    measurementId: "G-VJ09Y5TFZL"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  

  export { db, auth, storage };