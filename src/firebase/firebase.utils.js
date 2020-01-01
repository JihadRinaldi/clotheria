import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzvk9s8G18faUG7wlORukaOglQWboGwew",
  authDomain: "clotheria-db.firebaseapp.com",
  databaseURL: "https://clotheria-db.firebaseio.com",
  projectId: "clotheria-db",
  storageBucket: "clotheria-db.appspot.com",
  messagingSenderId: "4625054120",
  appId: "1:4625054120:web:e14dc0a4f53b5c7ad7859d",
  measurementId: "G-6GT1TM9VNK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
