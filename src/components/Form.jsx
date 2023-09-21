import {useParams, Link} from "react-router-dom"; 
import {useState} from "react"; 

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
            console.log(`res: ${res}`)
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
    //handler function to handle form submission logic! 
    const onSubmit = () => {

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
        </form>
    ); 
}

export default Form; 