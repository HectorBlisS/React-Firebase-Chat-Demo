import Firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCF74a_S31pSmQb0ZqfbKLSRdO4XOPgv3k",
    authDomain: "autonomo-7e183.firebaseapp.com",
    databaseURL: "https://autonomo-7e183.firebaseio.com",
    storageBucket: "autonomo-7e183.appspot.com",
    messagingSenderId: "192787601022"
  };

const firebase = Firebase.initializeApp(config);
export default firebase;
