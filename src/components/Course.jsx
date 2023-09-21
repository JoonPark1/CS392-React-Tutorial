
const Course = ({term, number, title, meets, isSelected, setSelected, hasTimeConflict}) => {
    const handleClick = () => {
        //first check if this current course comp. has time conflict, then we want to early return and not alter
        //isSelected state => so, it provides UI response to end-user that this course having conflict is simply
        //"unselectable!"
        if(hasTimeConflict && !isSelected){
            return; 
        }
        //turn off! 
        if(isSelected){
            setSelected(prev => prev.filter(e => e !== term + "|" + number + "|" + title + "|" + meets)); 
        } else {
            setSelected(prev => [...prev, term + "|" + number + "|" + title + "|" + meets]); 
        }
    }
    return (
            <div style={{width: "18rem", height:"15vw", objectFit: "cover", backgroundColor: isSelected ? "yellow" : "white"}} className="card text-center m-1 p-2" onClick={handleClick}>
                {!isSelected && hasTimeConflict ? <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="20">❌</text></svg> : null}
                <h5  className="card-title">{`${term} CS ${number}`}</h5>
                <p style={{borderBottom: "0.5px solid gray"}} className="card-text pb-5">{title}</p>
                <p className="card-text">{meets}</p>
            </div>
    ); 
}

export default Course; 