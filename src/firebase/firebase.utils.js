import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBvhTkjUGflT_PFgVWzvszh460QYoW6k4E",
	authDomain: "crown-db-7da92.firebaseapp.com",
	projectId: "crown-db-7da92",
	storageBucket: "crown-db-7da92.appspot.com",
	messagingSenderId: "622506322751",
	appId: "1:622506322751:web:0d6b3bf8008f9db43b818a",
	measurementId: "G-PGZ959SZ0J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setting up Goggle Authentication

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
