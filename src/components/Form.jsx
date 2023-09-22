import {useParams, Link} from "react-router-dom"; 
import {useState} from "react"; 
import {useDbUpdate} from "../utilities/firebase"; 

const Form = (props) => {
    //functions to validate input! 
    const checkCourseTitleValid = (title) =>  {
        const regExp = `.{2,}`;
        const res = title.match(regExp); 
        if(res){
            return true; 
        }
        return false; 
    }
    const checkMeetValid = (meets) => {
        if(meets === ""){
            return true; 
        } else {
            //have to make sure it follows valid format: "some_num_valid_day_chars time-range"
            const regExp = `^(M|Tu|W|Th|F)+ ([0-2][0-9]:[0-5][0-9]-[0-2][0-9]:[0-5][0-9])$`
            const res = meets.match(regExp);
            //console.log(`res: ${res}`)
            if(res){
                return true; 
            }
            return false; 
        }
    }
    const {id} = useParams(); 
    const [term, number, title, meets] = id.split("|"); 
    //state to keep track of each input field's latest value! 
    //use default values as initial state values! 
    const [fields, setFields] = useState({title, meets}); 
    const isTitleValid = checkCourseTitleValid(fields["title"]); 
    //console.log(`isTitleValid: ${isTitleValid}`); 
    const isMeetsValid = checkMeetValid(fields["meets"]); 
    //console.log(`isMeetsValid: ${isMeetsValid}`); 
    var termChar = null; 
    if(term === "Fall"){
        termChar = "F"; 
    } else if(term === "Winter"){
        termChar = "W";
    } else {
        termChar = "S"; 
    }
    //make initial database hook call to get access to data updating function to modify the database at that specified loc
    //passed as arg! 
    const [updateData, res] = useDbUpdate(`/courses/${termChar}${number}`);
    console.log("res: ", res) 
    //handler function to handle form submission logic! Basically, when form is submitted, we want to overwrite the data
    //with the latest up to date course field values! 
    const onSubmit = (e) => {
        //first, we want to override default behavior of browser => don't want refresh cause this will reset the state! 
        e.preventDefault(); 
        //then, we need to use updateData function to update w/ specified keys while leaving other unmentioned keys 
        //mapped vals staying same! But, be careful and only submit if no form errors(all inputs are valid) and 
        //the latest state value is distinct from the initial values => only then push the modification to DB! 
        if(isTitleValid && isMeetsValid && (fields["meets"] !== meets || fields["title"] !== title)){
            updateData({meets: fields["meets"], title: fields["title"]});
        }
    }
    //input change handler functions! 
    const handleCourseTitleChange = (e) => {
        setFields((prev) => {
            return {...prev, "title": e.target.value}; 
        })
    }
    const handleMeetChange = (e) => {
        setFields((prev) => {
            return {...prev, "meets": e.target.value}; 
        })
    }


    return (
        <form style={{border: "3px solid black", borderRadius: "3px", marginTop: "20px", width: "50%", height: "75%"}}>
                <label style = {{paddingRight: "30px", paddingLeft: "20px"}} htmlFor="title">Modify course title:</label>
                <input onChange = {handleCourseTitleChange} style ={{marginBottom: "30px"}} defaultValue = {title} type="text" id="title" ></input>
                {!isTitleValid && <p>Please enter a valid course title at least 2 characters long!</p>}
                <br /> 
                <label style = {{paddingRight: "30px", paddingLeft: "20px", marginBottom: "30px"}} htmlFor="meets">Modify meeting time:</label>
                <input onChange = {handleMeetChange} defaultValue = {meets} type="text" id="meets"></input>
                {!isMeetsValid && "Please enter a valid time range consisting of days and start-end: ex. MWF 12:00-1:50"}
                <br /> 
                <button><Link to = "/">Cancel!</Link></button>
                <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
    ); 
}

export default Form; 