import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCGRxa1EqZin27yIz7P0xvJEim7A5MZlng",
    authDomain: "webshop-react-50e84.firebaseapp.com",
    databaseURL: "https://webshop-react-50e84.firebaseio.com",
    projectId: "webshop-react-50e84",
    storageBucket: "webshop-react-50e84.appspot.com",
    messagingSenderId: "211326698024",
    appId: "1:211326698024:web:e1124fc7d28176a7582b1d",
    measurementId: "G-DKTYRS1WCK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;