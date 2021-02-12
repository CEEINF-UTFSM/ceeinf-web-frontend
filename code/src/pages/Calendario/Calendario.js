import React from 'react';
 import { Container } from "react-bootstrap";

import './Calendario.css';

function Calendar(){
  return(
    <Container fluid>
      <iframe title="Calendario de Eventos" src="https://calendar.google.com/calendar/embed?src=c_jpb3kvrgf8k4sel84vsuq48f04%40group.calendar.google.com&ctz=America%2FSantiago"></iframe>
    </Container>
  );
}

export default Calendar;
