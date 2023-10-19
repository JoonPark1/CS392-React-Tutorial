
const CourseSelector = ({checkedTerm, setTerm}) => {
    return (
        <div>
            <input checked = {checkedTerm === "Fall"} id = "Fall" type="radio" onClick={() => setTerm("Fall")}></input>
            <label data-cy="Fall" htmlFor="Fall">Fall</label>
            <input checked={checkedTerm==="Winter"} id = "Winter" type="radio" onClick={() => setTerm("Winter")}></input>
            <label data-cy = "Winter" htmlFor="Winter">Winter</label>
            <input checked={checkedTerm==="Spring"} id = "Spring" type="radio" onClick={() => setTerm("Spring")}></input>
            <label data-cy = "Spring" htmlFor="Spring">Spring</label>
        </div>
    ); 
}

export default CourseSelector; 