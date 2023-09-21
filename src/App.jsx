import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
import CourseList from "./components/CourseList"; 

const queryClient = new QueryClient(); 

const Main = () => {
  const [data, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  if(error) return <h1>Error loading course data!</h1>; 
  if(isLoading) return <h1>Loading course data...</h1>;
  if(!data)return<h1>No course data found!</h1>
  return (
    <div className="container">
      <Banner title={data.title} /> 
      <CourseList courses={data.courses}/> 
    </div>
  )
}

const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>
      <Main /> 
    </QueryClientProvider>
  );
};

export default App;
