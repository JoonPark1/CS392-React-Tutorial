import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton"; 
import {useAuthState} from "../utilities/firebase"; 
import {useProfile} from "../utilities/profile"

const AuthButton = ({setUser, setIsAdmin}) => {
    //call hook here => we will have auth button reflect the latest user returned by hook! 
    const [{user, isAdmin}, isLoading, error] = useProfile(); 
    console.log("in AuthButton comp!")
    console.log("user: ", user);
    console.log("isAdmin: ", isAdmin) 
    //whenever auth button re-renders cause the state within the "useAuthState" hook changed => either user logged-in or logged-out,
    //we will propagate this info all the way up to the root! 
    setUser(user); 
    setIsAdmin(isAdmin ? true : false); 
    return user ? <SignOutButton /> : <SignInButton />; 
}

export default AuthButton; 