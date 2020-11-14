import './Footer.css';

function Foot() {
    return(
        <footer>
            <div class="container">
                <div>
                    <a href="https://www.facebook.com/ceeinf">
                        <img src={"FbLogo.png"} className="FootLogo"/>
                    </a>
                    <a href="https://www.instagram.com/ceeinf_sj/?hl=es-la">
                        <img src={"IgLogo.png"} className="FootLogo"/>
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