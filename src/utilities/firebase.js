import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import {useEffect, useState} from "react"; 
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