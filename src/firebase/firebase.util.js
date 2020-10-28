import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDC2RcHur97u6iyX9C7S1GcjICHOur-U64",
    authDomain: "smart-db-beaf8.firebaseapp.com",
    databaseURL: "https://smart-db-beaf8.firebaseio.com",
    projectId: "smart-db-beaf8",
    storageBucket: "smart-db-beaf8.appspot.com",
    messagingSenderId: "406951759971",
    appId: "1:406951759971:web:cb3961ab44db8e34b6a856",
    measurementId: "G-2HXW8RV9XS"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;