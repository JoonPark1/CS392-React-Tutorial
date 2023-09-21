import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
import CourseList from "./components/CourseList"; 
import CourseSelector from "./components/CourseSelector"; 

const queryClient = new QueryClient(); 

const Main = () => {
  const [data, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  if(error) return <h1>Error loading course data!</h1>; 
  if(isLoading) return <h1>Loading course data...</h1>;
  if(!data)return<h1>No course data found!</h1>
  return (
    <div className="container">
      <Banner title={data.title} /> 
      <CoursePage courses = {data.courses}/> 
    </div>
  )
}

const CoursePage = ({courses}) => {
  //initialize state here! 
  const [term, setTerm] = useState("Fall");

  return (
    <div className="container">
      <CourseSelector checkedTerm = {term} setTerm={setTerm}/> 
      <CourseList courses = {courses} term = {term}/> 
    </div>
  ); 

}

const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>
      <Main />  
    </QueryClientProvider>
  );
};

export default App;
