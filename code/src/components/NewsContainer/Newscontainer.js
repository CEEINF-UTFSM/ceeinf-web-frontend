import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
import './Newscontainer.css'

function Newscontainer (props) {
    return (
        <Card id='container'>
            <Card.Img id='image' variant="top" src={props.imagen} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <p>{props.fecha} | {props.user}</p>
                <Card.Text>
                    {props.cuerpo}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Newscontainer;