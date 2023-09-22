import { signInWithGoogle } from "../utilities/firebase";
const SignInButton = () => {
    return (
        <button onClick={signInWithGoogle}>Sign-In</button>
    ); 
}

export default SignInButton; 