import React from 'react';
import { Container } from "react-bootstrap";
import Newscontainer from 'components/NewsContainer';

const Noticias = () => (
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
);

export default Noticias;