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
                <button type='button' class='collapsible'>Leer más</button>
                <div class='contenido'>
                    <Card.Text>
                        {props.descripcion}
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

export default Jobcontainer;