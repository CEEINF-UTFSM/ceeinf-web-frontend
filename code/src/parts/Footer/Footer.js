import React from 'react';
import './Footer.css';
import FbLogo from 'assets/images/FbLogo.png';
import IgLogo from 'assets/images/IgLogo.png';

function Foot() {
    return(
        <footer>
            <div class="container">
                <div>
                    <a href="https://www.facebook.com/ceeinf">
                        <img src={FbLogo} className="FootLogo" alt="fb-logo"/>
                    </a>
                    <a href="https://www.instagram.com/ceeinf_sj/?hl=es-la">
                        <img src={IgLogo} className="FootLogo" alt="ig-logo"/>
                    </a>
                </div>
                <div class="copyright">
                    © 2021, CEEINF
                </div>
            </div>
        </footer>
    );
}

export default Foot;