function MainCard() {
    return (
        <div className='ruan-card glass'>
            <div className='myself-container'>
            <div className='align-content'>
                <img src="minhaft.png" className='minhaft'/>
                <p className='meunome'>Ruan Azeredo</p>
            </div>
            </div>
            <div className='rightside-container'>
            <div className='navbar'>
                <span className='navbar-item'>SOBRE MIM</span>
                <span className='navbar-item'>PROJETOS</span>
                <span className='navbar-item'>TRAJETORIA</span>
                <span className='navbar-item'>CONTATO</span>
            </div>
            <div className='front-dev-container'>
                <div className='align-content'>
                <div className='frontend'>FRONT-END</div>
                <div className='developer'>DEVELOPER</div>
                <a className='github-container' href="https://github.com/Ruan-Azeredo">
                    <img src='github-icon.png' className='github-icon' />
                    <p className='github-link'>github.com/Ruan-Azeredo</p>
                </a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default MainCard;