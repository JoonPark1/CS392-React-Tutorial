const CourseList = ({courses}) => {
    return (
        <div>
            {Object.entries(courses).map(([course, courseObj]) => {
                return(<div key={course}>
                        <p>{`${courseObj.term} CS ${courseObj.number}: ${courseObj.title}`}</p>
                    </div>); 
            })}
        </div>
    ); 
}

export default CourseList; 