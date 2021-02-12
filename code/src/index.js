import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Newscontainer from 'components/NewsContainer';
import Calendar from 'pages/Calendario';
import Foot from 'parts/Footer';
import reportWebVitals from 'utils/reportWebVitals';

import{
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom';

// import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from "react-bootstrap";
 
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar bg="light" expand="lg" className="navBar">
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
      
      <Switch>
        
        <Route path="/noticias">
          <Container fluid>
            <Newscontainer 
              imagen="#"
              titulo="Finalmente...."
              cuerpo="aasdawas......asd">
            </Newscontainer>
            <Newscontainer 
              imagen="#"
              titulo="Se descubre que..."
              cuerpo="aasdawas......asd">
            </Newscontainer>
            <Newscontainer 
              imagen="#"
              titulo="La real historia de..."
              cuerpo="aasdawas......asd">
            </Newscontainer>
          </Container>
        </Route>

        <Route path="/calendario">
          <Container fluid>
            <Calendar></Calendar>
          </Container>
        </Route>

        <Route path="/asambleas">
        </Route>

        <Route path="/tomaderamos">
        </Route>

        <Route path="/documentos">
        </Route>

        <Route path="/foro">
        </Route>

      </Switch>

      <Foot></Foot>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();