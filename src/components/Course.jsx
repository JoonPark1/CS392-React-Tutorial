import EditIcon from "../icons/EditIcon"; 
import { Link } from 'react-router-dom';
import Context from "../utilities/Context"; 
import {useContext} from "react"; 


const Course = ({term, number, title, meets, isSelected, setSelected, hasTimeConflict}) => {
    //call useContext react hook here to listen in to latest user state value located in app! 
    const user = useContext(Context); 
    console.log(`user logged from course: `, user); 
    const uniqueID = term + "|" + number + "|" + title + "|" + meets; 
    const handleClick = () => {
        //first check if this current course comp. has time conflict, then we want to early return and not alter
        //isSelected state => so, it provides UI response to end-user that this course having conflict is simply
        //"unselectable!"
        if(hasTimeConflict && !isSelected){
            return; 
        }
        //turn off! 
        if(isSelected){
            setSelected(prev => prev.filter(e => e !== uniqueID)); 
        } else {
            setSelected(prev => [...prev, uniqueID]); 
        }
    }
    return (
            <div style={{width: "18rem", height:"15vw", objectFit: "cover", backgroundColor: isSelected ? "yellow" : "white"}} className="card text-center m-1 p-2" onClick={handleClick}>
                {user && <p> -- <Link to={`/form/${uniqueID}`}>{`Edit for ${term} CS ${number}`}</Link></p>}
                {!isSelected && hasTimeConflict ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="100">❌</text></svg> : null}
                <h5  className="card-title">{`${term} CS ${number}`}</h5>
                <p style={{borderBottom: "0.5px solid gray"}} className="card-text pb-5">{title}</p>
                <p className="card-text">{meets}</p>
            </div>
    ); 
}

export default Course; 