import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main"; 
import Context from "../src/utilities/Context"; 

const queryClient = new QueryClient(); 


const App = () => {
  //this user state value will be current logged in user describing obj or null if no user logged in currently! 
  const [user, setUser] = useState(null);
  //init. assume user is not logged in=> def. not admin! 
  const [isAdmin, setIsAdmin] = useState(false);  

  //we will simply import React Context object and wrap everything under Provider => this is so we can listen to the latest user
  //state value from the course component located further down the hierarchy! 
  return (
    <Context.Provider value = {{user: user, isAdmin: isAdmin}}>
      <QueryClientProvider client = {queryClient}>
        <Main setIsAdmin = {setIsAdmin} setUser={setUser}/> 
      </QueryClientProvider>
    </Context.Provider>
  );
};

export default App;
