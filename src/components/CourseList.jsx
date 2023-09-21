import Course from "./Course"; 
import "./CourseList.css"; 
const CourseList = ({courses}) => {
    return (
        <div className="course-list">
            {Object.entries(courses).map(([course, courseObj]) => {
                return <Course key = {course}
                               term = {courseObj.term} 
                               number={courseObj.number} 
                               title={courseObj.title} 
                               meets={courseObj.meets}/> 
            })}
        </div>
    ); 
}

export default CourseList; 