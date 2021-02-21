import React from 'react';
import{ useLocation } from 'react-router-dom';

import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { getSidebatPaths } from 'utils/routes';

import styles from './styles.module.scss';

const Foot = () => {
  const { pathname } = useLocation();
  const routes = getSidebatPaths();
  
  const isActual = (routeName) => {
    return pathname.indexOf(routeName) === 0;
  }

  return(
    <div className={styles.footer}>
      <Row>
        <Col>
          {/* arriba izquierda */}
          <img src={"ceeinfLogo.png"} className={styles.logo} alt="ceeinf-logo"/>
        </Col>
        <Col>
          {routes.map((props, key) => {
            // TODO check user access
            const { navbar, path } = props;
            const variant = isActual(path) ? 'primary' : '';
            return (
              <Button href={path} variant="" className={styles['button-footer']} >{navbar}</Button>
            );
          })}
        </Col>
        <Col className={styles['col-icons']}>
          <Button variant="" href="https://www.instagram.com/ceeinf_sj/?hl=es-la">
            <InstagramIcon/>
          </Button>
          <Button variant="" href="https://www.facebook.com/ceeinf">
            <FacebookIcon/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          © 2021 Copyright: CEEINF
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    </div>
  );
}

export default Foot;