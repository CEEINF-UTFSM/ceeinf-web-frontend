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
                <button type='button' class='collapsible'>Leer más</button>
                <div class='contenido'>
                    <Card.Text>
                      {props.cuerpo}
                    </Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

export default Newscontainer;