import Course from "./Course"; 
import "./CourseList.css"; 

const CourseList = ({courses, term}) => {
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
                if(course.indexOf(checkfor) == 0) {
                    return <Course key = {course}
                                term = {courseObj.term} 
                                number={courseObj.number} 
                                title={courseObj.title} 
                                meets={courseObj.meets}/> 
                }
            })}
        </div>
    ); 
}

export default CourseList; 