import React from 'react';
import { Navbar } from 'react-bootstrap';

import FbLogo from 'assets/images/FbLogo.png';
import IgLogo from 'assets/images/IgLogo.png';
import styles from './styles.module.scss';

function Foot() {
  return(
    <Navbar fixed="bottom" className={styles.footer}>
      <div class="container">
        <div>
          <a href="https://www.facebook.com/ceeinf">
            <img src={FbLogo} className={styles.icons} alt="fb-logo"/>
          </a>
          <a href="https://www.instagram.com/ceeinf_sj/?hl=es-la">
            <img src={IgLogo} className={styles.icons} alt="ig-logo"/>
          </a>
        </div>
        <div class="copyright">
          © 2021 Copyright: CEEINF
        </div>
      </div>
    </Navbar>
  );
}

export default Foot;