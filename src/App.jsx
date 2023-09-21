import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/Banner";
import CourseList from "./components/CourseList"; 
import CourseSelector from "./components/CourseSelector"; 
import Modal from "./components/Modal"; 

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
  //another state to manage array of selected courses! 
  const [selected, setSelected] = useState([]); 
  //another state to keep track of open state of pop-up window! 
  const [open, setOpen] = useState(false); 
  
  //handlers for popup! 
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false); 

  return (
      <div className="container">
        <Modal open={open} close={closeModal}>{selected}</Modal>
        <div>
          <CourseSelector checkedTerm = {term} setTerm={setTerm}/> 
          <button style={{marginLeft: "300px", margintop: "50px"}}onClick={openModal}>Click here to display list of selected courses!</button>
        </div>
        <CourseList setSelected={setSelected} selected = {selected} courses = {courses} term = {term}/> 
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
