import React from 'react';
import{
  Link
} from 'react-router-dom';

import { Navbar, Nav } from "react-bootstrap";

import styles from './styles.module.scss';

function Header() {
  return (
    <>
      <Navbar expand="lg" className={styles['account-bar']}>
        <div className={styles['account-info']}>
          hola mundo
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <img src={"ceeinfLogo.png"} className="Logo" alt="ceeinf-logo"/>
        <Nav.Link as={Link} to="/noticias">CEEINF</Nav.Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
            <Nav.Link as={Link} to="/calendario">Calendario</Nav.Link>
            <Nav.Link as={Link} to="#" href="#">Asambleas</Nav.Link>
            <Nav.Link href="https://mallas.labcomp.cl/">Malla</Nav.Link>
            <Nav.Link as={Link} to="#" href="#">Toma de ramos</Nav.Link>
            <Nav.Link as={Link} to="#" href="#">Documentos</Nav.Link>
            <Nav.Link as={Link} to="#" href="#">Foro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
