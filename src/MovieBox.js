import {Modal, show, Button} from 'react-bootstrap';
import React, {useState} from "react";
// import { Button } from 'react-bootstrap';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox = ({titel, poster_path, vote_avarage, release_date, overview}) => {
    
    const [show,setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    return(
        <div className="card text-center bg-dark mb-3 mx-1">
            <div className="card-body bg-dark">
                <img src={API_IMG+poster_path} className="card-img-top" />
                <div className="card-body bg-dark">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose} className="bg-dark">
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <img src={API_IMG+poster_path} className="card-img-top bg-dark" style={{width:'14rem'}}/>
                           <h3>{titel}</h3>
                           <h4>ImDb: {vote_avarage}</h4>
                           <h5>Release Date:{release_date}</h5>
                           <br />
                           <h6>Overview</h6>
                           <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;