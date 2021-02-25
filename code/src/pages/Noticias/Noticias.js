import React from 'react';
import { Container } from "react-bootstrap";
import Newscontainer from 'components/NewsContainer';
import Button from 'components/Atoms/Button';

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
    <Newscontainer 
      imagen="#"
      titulo="La real historia de..."
      cuerpo="aasdawas......asd">
    </Newscontainer>
    <Newscontainer 
      imagen="#"
      titulo="La real historia de..."
      cuerpo="aasdawas......asd">
    </Newscontainer>
    <Newscontainer 
      imagen="#"
      titulo="La real historia de..."
      cuerpo="aasdawas......asd">
    </Newscontainer>
    <Button
      // type="submit"
      color="neutral"
      variant="contained"
    >
      Keep me updated
    </Button>
  </Container>
);

export default Noticias;