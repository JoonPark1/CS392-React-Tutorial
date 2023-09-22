import AuthButton from "./AuthButton"; 
import Context from "../utilities/Context";
import {useContext} from "react"; 
const Banner = ({title, setUser}) => {
   const user = useContext(Context); 
    return (
        <div style={{display: "inline-flex"}}>
            <h1>{title}</h1>
            <AuthButton setUser = {setUser}/> 
            {user && <p>{`Welcome ${user.displayName}`}</p>}
        </div>
    ); 
}

export default Banner; 