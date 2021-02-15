import React from 'react';
import{
  Link
} from 'react-router-dom';

import { Navbar, Nav, Button } from "react-bootstrap";

import styles from './styles.module.scss';

function Header() {
  return (
    <>
      <Navbar expand="lg" className={styles['account-bar']}>
        <div className={styles['account-info']}>
          Iniciar Sesión
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <img src={"ceeinfLogo.png"} className={styles.logo} alt="ceeinf-logo"/>
        {/* <Nav.Link as={Link} to="/noticias">CEEINF</Nav.Link>  */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Button variant="primary">
              <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link as={Link} to="/calendario">Calendario</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link as={Link} to="#" href="#">Asambleas</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link href="https://mallas.labcomp.cl/">Malla</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link as={Link} to="#" href="#">Toma de ramos</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link as={Link} to="#" href="#">Documentos</Nav.Link>
            </Button>
            <Button variant="primary">
              <Nav.Link as={Link} to="#" href="#">Foro</Nav.Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
