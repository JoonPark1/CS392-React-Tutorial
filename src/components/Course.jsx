const Course = ({term, number, title, meets}) => {
    return (
        <div >
            <div style={{width: "18rem", height:"15vw", objectFit: "cover"}} className="card text-center m-1 p-2">
                <h5  className="card-title">{`${term} CS ${number}`}</h5>
                <p style={{borderBottom: "0.5px solid gray"}} className="card-text pb-5">{title}</p>
                <p className="card-text">{meets}</p>
            </div>
        </div>
    ); 
}

export default Course; 