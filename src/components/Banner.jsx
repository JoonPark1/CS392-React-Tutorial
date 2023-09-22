import AuthButton from "./AuthButton"; 
import Context from "../utilities/Context";
import {useContext} from "react"; 
const Banner = ({title, setUser, setIsAdmin}) => {
   const {user, isAdmin} = useContext(Context); 
    return (
        <div style={{display: "inline-flex"}}>
            <h1>{title}</h1>
            <AuthButton setUser = {setUser} setIsAdmin={setIsAdmin}/> 
            {user && <p>{`Welcome ${user.displayName} ${isAdmin ? "(admin)" : ""}`}</p>}
        </div>
    ); 
}

export default Banner; 