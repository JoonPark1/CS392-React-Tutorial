import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
    //call useAuthState hook here so if user info changes(due to new sign-in or sign-out), 
    //user will be updated! 
    const [user] = useAuthState();
    //then, see if the authenticated user has uid key under "/admins" => if so, then the auth user is indeed an admin! 
    const [isAdmin, isLoading, error] =  useDbData(`/admins/${user?.uid || 'guest'}`);
    return [{ user, isAdmin }, isLoading, error];
};