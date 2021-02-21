import React from 'react';
import{
  Link,
  useLocation,
} from 'react-router-dom';

import { Navbar, Nav, Button } from "react-bootstrap";
import { getSidebatPaths } from 'utils/routes';

import styles from './styles.module.scss';



const Header = () => {
  const { pathname } = useLocation();
  const routes = getSidebatPaths();
  
  const isActual = (routeName) => {
    return pathname.indexOf(routeName) === 0;
  }

  return (
    <>
      <Navbar expand="lg" className={styles['account-bar']}>
        <div className={styles['account-info']}>
          Iniciar Sesión
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Nav.Link as={Link} to="">
          <img src={"ceeinfLogo.png"} className={styles.logo} alt="ceeinf-logo"/>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {routes.map((props, key) => {
              // TODO check user access
              const { navbar, path } = props;
              const variant = isActual(path) ? 'primary' : '';
              return (
                <Button variant={variant} key={navbar}>
                  <Nav.Link as={Link} to={path}>{navbar}</Nav.Link>
                </Button>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
