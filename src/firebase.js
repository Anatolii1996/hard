import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// const auth = getAuth();

const firebaseConfig = {
    apiKey: "AIzaSyAldCToeELP_ljjpUz2RM-NDkd6cO81PEw",
    authDomain: "laboratory-3-b55c3.firebaseapp.com",
    projectId: "laboratory-3-b55c3",
    storageBucket: "laboratory-3-b55c3.appspot.com",
    messagingSenderId: "1035709237226",
    appId: "1:1035709237226:web:1e70f7413a223baa561493"
  };

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//   signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });

 export const app = initializeApp(firebaseConfig);
 export const provider = new GoogleAuthProvider();