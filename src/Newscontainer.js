import {Card} from "react-bootstrap";
import './Newscontainer.css'

function Newscontainer (props) {
    return (
        <Card id='container'>
            <Card.Img variant="top" src={props.imagen} />
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                    {props.cuerpo}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Newscontainer;