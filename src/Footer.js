import './Footer.css';

function Foot() {
    return(
        <footer>
            <div class="container">
                <div>
                    <a href="https://www.facebook.com/ceeinf">
                        <img src={"FbLogo.png"} className="FootLogo" alt="fb-logo"/>
                    </a>
                    <a href="https://www.instagram.com/ceeinf_sj/?hl=es-la">
                        <img src={"IgLogo.png"} className="FootLogo" alt="ig-logo"/>
                    </a>
                </div>
                <div class="copyright">
                    © 2020 Copyright: CEEINF
                </div>
            </div>
        </footer>
    );
}

export default Foot;