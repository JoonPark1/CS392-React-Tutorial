import Course from "./Course"; 
import "./CourseList.css"; 

const CourseList = ({courses, term, selected, setSelected}) => {
    var checkfor = null;
    if(term == "Fall"){
        checkfor = "F";
    } else if(term == "Winter"){
        checkfor = "W"; 
    } else{
        checkfor = "S"; 
    }
    return (
        <div className="course-list">
            {Object.entries(courses).map(([course, courseObj]) => {
                //does it meet selection criteria? 
                if(course.indexOf(checkfor) == 0) {
                    var isSelected= false; 
                    //unique identifier for course => term concat. w/ the number! 
                    const uniqueID = courseObj.term + "_" + courseObj.number; 
                    if(selected.indexOf(uniqueID) != -1){
                        isSelected = true; 
                    }
                    return <Course key = {course}
                                term = {courseObj.term} 
                                number={courseObj.number} 
                                title={courseObj.title} 
                                meets={courseObj.meets}
                                isSelected = {isSelected}
                                setSelected={setSelected} /> 
                }       
            })}
        </div>
    ); 
}

export default CourseList; 