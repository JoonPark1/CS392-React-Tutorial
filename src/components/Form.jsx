import {useParams, Link} from "react-router-dom"; 

const Form = (props) => {
    const {id} = useParams(); 
    const [term, number, title, meets] = id.split("|"); 
    const onSubmit = () => {

    }
    return (
        <form style={{border: "3px solid black", borderRadius: "3px", marginTop: "20px", width: "50%", height: "75%"}}>
                <label style = {{paddingRight: "30px", paddingLeft: "20px"}} htmlFor="title">Modify course title:</label>
                <input style ={{marginBottom: "30px"}} defaultValue = {title} type="text" id="title"></input>
                <br /> 
                <label style = {{paddingRight: "30px", paddingLeft: "20px", marginBottom: "30px"}} htmlFor="meets">Modify meeting time:</label>
                <input defaultValue = {meets} type="text" id="meets"></input>
                <br /> 
                <button><Link to = "/">Cancel!</Link></button>
        </form>
    ); 
}

export default Form; 