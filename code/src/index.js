import React from 'react';
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import Foot from 'parts/Footer';
import Header from 'parts/Header';
import Calendar from 'pages/Calendario';
import Noticias from 'pages/Noticias';
import reportWebVitals from 'utils/reportWebVitals';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      
      <Switch>
        <Route path="/noticias">
          <Noticias/>
        </Route>

        <Route path="/calendario">
          <Calendar/>
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

    </Router>
    <Foot/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
