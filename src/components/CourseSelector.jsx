
const CourseSelector = ({checkedTerm, setTerm}) => {
    return (
        <div>
            <input checked = {checkedTerm === "Fall"} id = "Fall" type="radio" onClick={() => setTerm("Fall")}></input>
            <label htmlFor="Fall">Fall</label>
            <input checked={checkedTerm==="Winter"} id = "Winter" type="radio" onClick={() => setTerm("Winter")}></input>
            <label htmlFor="Winter">Winter</label>
            <input checked={checkedTerm==="Spring"} id = "Spring" type="radio" onClick={() => setTerm("Spring")}></input>
            <label htmlFor="Spring">Spring</label>
        </div>
    ); 
}

export default CourseSelector; 