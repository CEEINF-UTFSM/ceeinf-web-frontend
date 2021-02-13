import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from "react-bootstrap";
import{
  Link
} from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <img src={"ceeinfLogo.png"} className="Logo" alt="ceeinf-logo"/>
      <Nav.Link as={Link} to="/noticias">CEEINF</Nav.Link> 
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/noticias">Social</Nav.Link>
          <Nav.Link as={Link} to="/calendario">Calendario</Nav.Link>
          <Nav.Link as={Link} to="#" href="#">Asambleas</Nav.Link>
          <Nav.Link href="https://mallas.labcomp.cl/">Malla</Nav.Link>
          <Nav.Link as={Link} to="#" href="#">Toma de ramos</Nav.Link>
          <Nav.Link as={Link} to="#" href="#">Documentos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
