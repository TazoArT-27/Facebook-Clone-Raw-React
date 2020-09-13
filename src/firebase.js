// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDuufZYnw0n6K6FHko1R8GC2BlDWLmoYRY",
    authDomain: "facebook-clone-4c7ab.firebaseapp.com",
    databaseURL: "https://facebook-clone-4c7ab.firebaseio.com",
    projectId: "facebook-clone-4c7ab",
    storageBucket: "facebook-clone-4c7ab.appspot.com",
    messagingSenderId: "503390552184",
    appId: "1:503390552184:web:313fc58493b2d829066d8d",
    measurementId: "G-5YCGG47D08"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
export default db;