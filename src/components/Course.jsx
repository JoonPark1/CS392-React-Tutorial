const Course = ({term, number, title, meets, isSelected, setSelected}) => {
    const handleClick = () => {
        console.log(`course: ${term + title} got clicked`);
        console.log("previous state: ", isSelected); 
        //turn off! 
        if(isSelected){
            setSelected(prev => prev.filter(e => e !== term + "_" + number)); 
        } else {
            setSelected(prev => [...prev, term + "_" + number])
        }
    }
    return (
            <div style={{width: "18rem", height:"15vw", objectFit: "cover", backgroundColor: isSelected ? "yellow" : "white"}} className="card text-center m-1 p-2" onClick={handleClick}>
                <h5  className="card-title">{`${term} CS ${number}`}</h5>
                <p style={{borderBottom: "0.5px solid gray"}} className="card-text pb-5">{title}</p>
                <p className="card-text">{meets}</p>
            </div>
    ); 
}

export default Course; 