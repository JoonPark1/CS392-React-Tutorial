import Banner from "./Banner";
import CoursePage from "./CoursePage"
import { useJsonQuery } from '../utilities/fetch'; 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./Form";

const Main = () => {
   const [data, isLoading, error] = useJsonQuery("https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php");
  if(error) return <h1>Error loading course data!</h1>; 
  if(isLoading) return <h1>Loading course data...</h1>;
  if(!data)return<h1>No course data found!</h1>
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<>
                                    <Banner title={data.title} /> 
                                    <CoursePage courses = {data.courses}/> 
                                    </>} /> 
          <Route path="/form/:id" element = {<Form />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Main; 