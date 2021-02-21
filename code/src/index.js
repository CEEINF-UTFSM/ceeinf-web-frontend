import React from 'react';
import ReactDOM from 'react-dom';
import{
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import Foot from 'parts/Footer';
import Header from 'parts/Header';
import reportWebVitals from 'utils/reportWebVitals';
import { getRoutes } from 'utils/routes';

// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const routes = getRoutes();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Switch>
        {routes.map((props, key) => {
          const { path, component } = props;
          return (
            <Route path={path} key={path}>
              {component}
            </Route>
          );
        })}
      </Switch>
      <Foot/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
