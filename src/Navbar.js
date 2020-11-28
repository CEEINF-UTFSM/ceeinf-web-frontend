import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav} from "react-bootstrap";

function Topnav() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <img src={"ceeinfLogo.png"} className="Logo" alt="ceeinf-logo"/>
      <Navbar.Brand href="index.js">CEEINF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="./index.js">Noticias</Nav.Link>
          <Nav.Link href="#">Calendario</Nav.Link>
          <Nav.Link href="#">Asambleas</Nav.Link>
          <Nav.Link href="https://mallas.labcomp.cl/">Malla</Nav.Link>
          <Nav.Link href="#">Toma de ramos</Nav.Link>
          <Nav.Link href="#">Documentos</Nav.Link>
          <Nav.Link href="#">Foro</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topnav;