import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import './Jobcontainer.css';

function Jobcontainer (props) {
    return (
        <Card id='container'>
            <Card.Body>
                <p id='user'>{props.user}</p>
                <Card.Img id='logo' src={props.logo} />
                <Card.Title id='title'>{props.oferta} | {props.sueldo} </Card.Title>
                <p id='ubi'>{props.ubicacion}</p>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Jobcontainer;