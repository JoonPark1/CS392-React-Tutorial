import CourseSelector from "./CourseSelector"; 
import CourseList from "./CourseList"; 
import Modal from "./Modal"; 
import {useState} from "react"; 

const CoursePage = ({courses}) => {
    //initialize state here! 
    const [term, setTerm] = useState("Fall");
    //another state to manage array of selected courses! 
    const [selected, setSelected] = useState([]); 
    //another state to keep track of open state of pop-up window! 
    const [open, setOpen] = useState(false); 
    console.log(selected); 
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

export default CoursePage; 