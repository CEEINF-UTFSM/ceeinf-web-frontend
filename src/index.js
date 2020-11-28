import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Topnav from './Navbar';
import Newscontainer from './Newscontainer';
import Foot from './Footer';
import reportWebVitals from './reportWebVitals';
 
ReactDOM.render(
  <React.StrictMode>
    <Topnav></Topnav>
    <Newscontainer 
    imagen="#"
    titulo="Finalmente...."
    cuerpo="aasdawas......asd"></Newscontainer>
    <Newscontainer 
    imagen="#"
    titulo="Se descubre que..."
    cuerpo="aasdawas......asd"></Newscontainer>
    <Newscontainer 
    imagen="#"
    titulo="La real historia de..."
    cuerpo="aasdawas......asd"></Newscontainer>
    <Foot></Foot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
