import React from "react";
import Notes from "./notes";
import Dates from "./creation-date"
import "./modal.css"

function Modal(props){

    if (!props.open) return null;

    return(
        <div className="modalBackground">
            
            <div className="modalContainer">
                <button className="close-btn" onClick={props.closeModal}> X </button>
                <div className="title"><h1>Job Detail</h1></div>
                <div className="body">
                <Dates className="dates" date={props.date} time={props.time} />
                <div className="tradie-info">Name:{props.name}     Id:{props.id}</div>
                <div className="contact">Contact:{props.contact}</div>
                </div>
                <Notes className="notes"/>
                <div className="footer">
                <button className="cancel-btn" onClick={props.closeModal}>Cancel</button>
                </div>
                
            </div>
        </div>
    )
    }

export default Modal;