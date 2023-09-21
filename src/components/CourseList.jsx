import Course from "./Course"; 
import "./CourseList.css"; 
import checkOverlap from "../utilities/checkConflict";

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
                    const uniqueID = term + "|" + courseObj.number + "|" + courseObj.title + "|" + courseObj.meets; 
                    if(selected.indexOf(uniqueID) != -1){
                        isSelected = true; 
                    }
                    var hasTimeConflict = false; 
                    selected.forEach(course => {
                        //first have to see if cur selected course shares common term(quarter) w/ current course we 
                        // are mapping to! => Only then, do we care about checking for overlapping dates and times! 
                        if(courseObj.term === course.split("|")[0]){
                            const meetingDateTime = course.split("|")[3]
                            //check if current course conflicts with each and every course already selected! 
                            if(checkOverlap(meetingDateTime, courseObj.meets)){
                                hasTimeConflict = true; 
                            }
                        }
                    }); 
                    //based on latest selected courses, check if current course comp. we are mapping to has time conflcit with any 
                    //one of them! 
                    return <Course key = {course}
                                term = {courseObj.term} 
                                number={courseObj.number} 
                                title={courseObj.title} 
                                meets={courseObj.meets}
                                isSelected = {isSelected}
                                setSelected={setSelected}
                                hasTimeConflict={hasTimeConflict} /> 
                }       
            })}
        </div>
    ); 
}

export default CourseList; 