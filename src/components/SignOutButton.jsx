import { googleSignOut } from "../utilities/firebase"; 
const SignOutButton = () => {
    return (
        <button onClick={googleSignOut}>Sign-Out</button>
    ); 
}

export default SignOutButton; 