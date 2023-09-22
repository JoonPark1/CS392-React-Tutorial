import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update} from "firebase/database";
import {useEffect, useState, useCallback} from "react"; 
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

//import { getDatabase, onValue, ref, update} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDWtFz7c4u0deXD2Xiv2xBEq9NVzte5dcU",
    authDomain: "cs392react.firebaseapp.com",
    databaseURL: "https://cs392react-default-rtdb.firebaseio.com",
    projectId: "cs392react",
    storageBucket: "cs392react.appspot.com",
    messagingSenderId: "531377979474",
    appId: "1:531377979474:web:a219b5b3f42c42b3665f8b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//helper to return useful info regarding the result of DB call! 
const makeResult = (error) => {
    const timestamp = Date.now();
    const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
    return { timestamp, error, message };
  };


//hook to retrieve DB data based on specified path starting from root of DB =>
//whenever a new path is passed in as arg, we will get the latest snapshot data at that specified new path! 
export const useDbData = (path) => {
    const [data, setData] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => (
      onValue(ref(database, path), (snapshot) => {
       setData( snapshot.val() );
      }, (error) => {
        setError(error);
      })
    ), [ path ]);
  
    return [ data, error ];
  };
  //another database hook given the path returns array of two things:
  //updateData => special function that helps to update data at that specified path with the val I pass in when I invoke it!
  //result => 
  export const useDbUpdate = (path) => {
    const [result, setResult] = useState();
    const updateData = useCallback((value) => {
      update(ref(database, path), value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)))
    }, [database, path]);
  
    return [updateData, result];
  };

  //functions to handle authentication! 

  //this function displays pop-up window to allow user to log in using their google account! 
  export const signInWithGoogle = () => {
    //console.log("signInWithGoogle function called from firebase.js"); 
    signInWithPopup(getAuth(app), new GoogleAuthProvider()); 
  }
  //helper function called to sign current logged-in user out based on current auth state of Firebase app instance! 
  export const googleSignOut = () => {
    signOut(getAuth(app)); 
  }
 //special hook that will keep track of latest user state if some user is logged in=> otherwise undefined!
 //whenever, the auth state changes, it will set the user appropriately. 
  export const useAuthState = () => {
    const [user, setUser] = useState();
    console.log(`latest user: ${user} from useAuthState hook!`)
    useEffect(() => (
      onAuthStateChanged(getAuth(app), setUser)
    ), []);
  
    return [user];
  };