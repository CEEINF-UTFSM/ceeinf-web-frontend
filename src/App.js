import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <img src={"ceeinfLogo.png"} className="Logo"/>
      <Navbar.Brand href="index.js">CEEINF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#">Noticias</Nav.Link>
          <Nav.Link href="#">Calendario</Nav.Link>
          <Nav.Link href="#">Asambleas</Nav.Link>
          <Nav.Link href="https://mallas.labcomp.cl/">Malla</Nav.Link>
          <Nav.Link href="#">Toma de ramos</Nav.Link>
          <Nav.Link href="#">Documentos</Nav.Link>
          <Nav.Link href="#">Foro</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
