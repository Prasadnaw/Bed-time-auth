import *as firebase from "firebase"
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyCVaZks6Hw815O4PBGTk54OyiQf_oXansc",
    authDomain: "library-b036d.firebaseapp.com",
    databaseURL: "https://library-b036d-default-rtdb.firebaseio.com",
    projectId: "library-b036d",
    storageBucket: "library-b036d.appspot.com",
    messagingSenderId: "423019999884",
    appId: "1:423019999884:web:e84ff94cb7473a738241a9",
  };
  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();