import firebase from "firebase";
//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCsgpNvLmeOPaHGgrZslQM8PdMNYWbpRks",
  authDomain: "my-netflix-1d2df.firebaseapp.com",
  projectId: "my-netflix-1d2df",
  storageBucket: "my-netflix-1d2df.appspot.com",
  messagingSenderId: "582429518236",
  appId: "1:582429518236:web:fa381dea163a502cf78059",
  measurementId: "G-4YJZCG1TL0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
