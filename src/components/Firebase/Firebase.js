// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const devConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const firebaseConfig = process.env.NODE_ENV === 'production'
  ? devConfig : devConfig;

class Firebase {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
  }

  onGoogleSignIn = async () => {
    console.log('onGoogleSignIn')
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    try {
      await this.auth.signInWithPopup(googleProvider)

      console.log('success')
      return true;
    } catch (e) {
      console.log('failure')
      console.log(e)
    }
  }

  onSignOut = async () => {
    console.log('onSignOut')
    try {
      await this.auth.signOut();

      console.log('success')
      return true;
    } catch(e) {
      console.log('failure')
      console.log(e)
    } 
  }
}

export default Firebase;