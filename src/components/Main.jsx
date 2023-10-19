import Banner from "./Banner";
import CoursePage from "./CoursePage"
import { useJsonQuery } from '../utilities/fetch'; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./Form";
import {useDbData} from "../utilities/firebase"; 

const Main = ({setUser, setIsAdmin}) => {
  //get the entire data from the root level of JSON hierarchy using the useDbData hook! 
  const [data, error] = useDbData("/"); 
  console.log(`data: `, data); 
  if(error) return <h1>Error loading course data!</h1>; 
  if(data===undefined) return <h1>Loading course data...</h1>;
  if(!data)return<h1>No course data found!</h1>
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<>
                                    <Banner setIsAdmin = {setIsAdmin} setUser = {setUser} title={data.title} /> 
                                    <CoursePage courses = {data.courses}/> 
                                    </>} /> 
          <Route path="/form/:id" element = {<Form />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Main; 