import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD8YmiWGX_1mIpbyPGfQM2tfzGovI2exek",
    authDomain: "book-santa-app-f236c.firebaseapp.com",
    databaseURL: "https://book-santa-app-f236c.firebaseio.com",
    projectId: "book-santa-app-f236c",
    storageBucket: "book-santa-app-f236c.appspot.com",
    messagingSenderId: "928038736705",
    appId: "1:928038736705:web:d40c03382b85360aa087c0",
    measurementId: "G-WEXMFC2S6Y"
  };

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
