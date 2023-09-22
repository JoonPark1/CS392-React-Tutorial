import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton"; 
import {useAuthState} from "../utilities/firebase"; 

const AuthButton = ({setUser}) => {
    //call hook here => we will have auth button reflect the latest user returned by hook! 
    const [user] = useAuthState(); 
    //whenever auth button re-renders cause the state within the "useAuthState" hook changed => either user logged-in or logged-out,
    //we will propagate this info all the way up to the root! 
    setUser(user); 
    return user ? <SignOutButton /> : <SignInButton />; 
}

export default AuthButton; 