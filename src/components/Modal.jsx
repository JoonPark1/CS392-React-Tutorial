import "./Modal.css"; 
import {useEffect} from "react"; 
//import "bootstrap/dist/css/bootstrap.min.css"; 

const Modal = ({ children, open, close }) => {
    return (
        <>
            <div
            className={`modal ${open ? 'modal-show' : ''}`}
            tabIndex="-1"
            role="dialog"
            onClick = {(evt) => { if (evt.target === evt.currentTarget) close(); }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="btn-close" aria-label="Close"
                            onClick={close}
                        />
                        </div>
                        <div className="modal-body">
                            {children.length > 0 && <ul>
                                {children.map(c => <li>{c}</li>)}
                            </ul>}
                            {children.length === 0 && <p>No courses selected yet! If you want to select course, click on the course card!</p>}
                        </div>
                    </div>
                </div>
            </div>
  </>); 
};

export default Modal; 