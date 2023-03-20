import { Button, Tooltip } from "@nextui-org/react";
import { useContext, useState } from "react";
import ModalButton from "../components/ModalButton";
import RuanAzeredo from "../components/RuanAzeredo";
import LanguageContext from "../context/LanguageContext";
import { Hamburguer } from "../icons/Hamburger";
import { Language } from "../icons/Language";
import { Xmark } from "../icons/Xmark";

function MainCard() {
    const { lang, alterarLingua } = useContext(LanguageContext)

    var p1, p2, l, h
    if (lang == 'PT' || lang == null) {
        p1 = 'Alguém que adora música, café, JavaScript e '
        p2 = 'Vamos construir algo incrível juntos!'
        l = 'P'
        h = 'hidden'
    } else {
        p1 = 'Someone who loves music, coffee, JavaScript and '
        p2 = "Let's build something amazing together!"
        l = 'E'
    }

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    var transition
    nav ? transition = 'left-0' :  transition = 'left-[-100%]'

    return (
        <div className="main-card-section">
                <ul className={`absolute top-0 bg-gray-low w-[60%] h-full border-r border-grayy ease-in-out duration-500 ${transition} bg-black z-50`}>
                    <li className='px-4 py-6 border-b border-grayy'><a href="#sobremim">{l == 'P' ? 'SOBRE MIM' : 'ABOUT ME'}</a></li>
                    <li className='px-4 py-6 border-b border-grayy'><a href="#projetos">{l == 'P' ? 'PROJETOS' : 'PROJECTS'}</a></li>
                    <li className='px-4 py-6 border-b border-grayy'><a href="#trajetoria">{l == 'P' ? 'TRAJETORIA' : 'TRAJECTORY'}</a></li>
                    <li className='px-4 py-6 border-b border-grayy'><a href="#contato">{l == 'P' ? 'CONTATO' : 'CONTACT'}</a></li>
                </ul>
            <div className="md:hidden flex justify-between px-4 md:px-0">
                <Button
                    onClick={() => alterarLingua()}
                    auto color="#152DFF" rounded bordered
                    css={{ background: "transparent", border: "none", h: 32, w: 32, p: 0 }}
                    className='z-40'
                ><Language className='scale-125' /></Button>
                <button className='md:hidden text-white text-3xl' onClick={handleNav}>
                    {nav ? <Xmark/> : <Hamburguer/>}
                </button>

            </div>
            <div className='navbar'>
                <div className="gap-8 div">
                    {/* <a href="/" className="w-8 h-8"> */}
                    <ModalButton img="gen/perfilSquare.png">
                        <img src="gen/perfilSquare.png" alt="" className="w-8 h-8 rounded-full m-0"/>
                    </ModalButton>
                    <Tooltip content="I'm Brazilian" placement="bottom">
                        <img src="gen/brasil.png" alt="" className={`h-10 hue-rotate-15 relative -top-1 ${h}`} />
                    </Tooltip>
                    {/* </a> */}
                    <Button
                        onClick={() => alterarLingua()}
                        auto color="#152DFF" rounded bordered
                        css={{background: "transparent", border: "none", h: 32, w: 32, p: 0}}
                    ><Language /></Button>
                </div>
                <div className="justify-between div">
                    <span className='navbar-item'><a href="#sobremim">{l == 'P' ? 'SOBRE MIM' : 'ABOUT ME'}</a></span>
                    <span className='navbar-item'><a href="#projetos">{l == 'P' ? 'PROJETOS' : 'PROJECTS'}</a></span>
                    <span className='navbar-item'><a href="#trajetoria">{l == 'P' ? 'TRAJETORIA' : 'TRAJECTORY'}</a></span>
                    <span className='navbar-item'><a href="#contato">{l == 'P' ? 'CONTATO' : 'CONTACT'}</a></span>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className='ruan-card glass'>
                <div className="r-infos">
                    <RuanAzeredo/>
                    {/* <div className="name n-white">Ruan Azeredo</div>
                    <div className="name n-gradient">Ruan Azeredo</div> */}
                    <div className="name-subtitle desk-sub">
                    {p1}<span>Front-end</span>.
                    </div>
                    <div className="name-subtitle mobi-sub">
                        Web Developer
                    </div>
                    <div className="name-subtitle desk-sub">
                    {p2}
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