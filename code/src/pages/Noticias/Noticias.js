import React from 'react';
import { Container } from "react-bootstrap";
import Newscontainer from 'components/NewsContainer';
import Jobcontainer from 'components/Jobcontainer';

const Noticias = () => (
  <Container fluid>
    <Newscontainer 
      imagen="https://enlinea.santotomas.cl/wp-content/uploads/sites/2/2018/12/Inform%C3%A1tica-admisi%C3%B3n-744x465.jpg"
      titulo="Admisión Ingeniería Civil en Informática 2021."
      fecha="13 de Febrero, 2021"
      user="Universidad técnica Federico Santa María"
      cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
    </Newscontainer>
    <Jobcontainer
      user="FabLab USM SJ"
      logo="https://upload.wikimedia.org/wikipedia/commons/d/d2/Fab_Lab_logo.svg"
      oferta="Practica Desarrollador Front-End"
      sueldo="$250.000/mes"
      ubicacion="Santiago"
      descripcion=" (OPCIONAL) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.">
    </Jobcontainer>
  </Container>
);

export default Noticias;