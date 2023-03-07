import ModalButton from "../components/ModalButton";
import RuanAzeredo from "../components/RuanAzeredo";

function MainCard() {
    return (
        <div className="main-card-section">
            <div className='navbar'>
                <div>
                    {/* <a href="/" className="w-8 h-8"> */}
                    <ModalButton img="gen/perfilSquare.png">
                        <img src="gen/perfilSquare.png" alt="" className="w-8 h-8 rounded-full"/>
                    </ModalButton>
                    {/* </a> */}
                </div>
                <div>
                    <span className='navbar-item'><a href="#sobremim">SOBRE MIM</a></span>
                    <span className='navbar-item'><a href="#projetos">PROJETOS</a></span>
                    <span className='navbar-item'><a href="#trajetoria">TRAJETORIA</a></span>
                    <span className='navbar-item'><a href="#contato">CONTATO</a></span>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className='ruan-card glass'>
                <div className="r-infos">
                    <RuanAzeredo/>
                    {/* <div className="name n-white">Ruan Azeredo</div>
                    <div className="name n-gradient">Ruan Azeredo</div> */}
                    <div className="name-subtitle desk-sub">
                    Alguém que adora música, café, JavaScript e <span>Front-end</span>.
                    </div>
                    <div className="name-subtitle mobi-sub">
                        Web Developer
                    </div>
                    <div className="name-subtitle desk-sub">
                    Vamos construir algo incrível juntos!
                    </div>
                    <div className="btn-github">
                        <a className='github-container border-grayy border-2' href="https://github.com/Ruan-Azeredo">
                            <img src='gen/github-icon.png' className='github-icon' />
                            <p className='github-link'>github.com/Ruan-Azeredo</p>
                        </a>                
                    </div>
                </div>
                <div className="l-photo">
                    <img src="gen/picwish.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainCard;