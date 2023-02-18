function MainCard() {
    return (
        <div className="main-card-section">
            <div className='navbar'>
                <span className='navbar-item'><a href="#sobremim">SOBRE MIM</a></span>
                <span className='navbar-item'><a href="#projetos">PROJETOS</a></span>
                <span className='navbar-item'><a href="#trajetoria">TRAJETORIA</a></span>
                <span className='navbar-item'><a href="#contato">CONTATO</a></span>
            </div>
            <div className="rectangle"></div>
            <div className='ruan-card glass'>
                <div className="r-infos">
                    <div className="name n-white">Ruan Azeredo</div>
                    <div className="name n-gradient">Ruan Azeredo</div>
                    <div className="name-subtitle">
                    Alguém que adora música, café e JavaScript e <span>Front-end</span>.
                    </div>
                    <div className="name-subtitle">
                    Vamos construir algo incrível juntos
                    </div>
                    <div className="btn-github">
                        <a className='github-container' href="https://github.com/Ruan-Azeredo">
                            <img src='github-icon.png' className='github-icon' />
                            <p className='github-link'>github.com/Ruan-Azeredo</p>
                        </a>                
                    </div>
                </div>
                <div className="l-photo">
                    <img src="mask-group.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainCard;