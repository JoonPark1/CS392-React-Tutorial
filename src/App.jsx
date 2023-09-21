import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main"; 

const queryClient = new QueryClient(); 

const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>
      <Main />  
    </QueryClientProvider>
  );
};

export default App;
