import { useContext } from "react";
import CurriculoComponent from "../components/CurriculoComponent";
import Title from "../components/Title";
import VsScreenComponent from "../components/VsScreenComponent";
import LanguageContext from "../context/LanguageContext";

function AboutMe() {
    const { lang } = useContext(LanguageContext)

    var title, fav
    if (lang == 'PT' || lang == null) {
        title = 'SOBRE MIM'
        fav = 'TECNOLOGIAS FAVORITAS'
    } else {
        title = 'ABOUT ME'
        fav = 'FAVORITE TECHNOLOGIES'
    }

    return (
        <div className="AboutMe"><a name='sobremim'></a>
            <Title title={title}/>

            <div className="aboutme-container">
                <VsScreenComponent lang={lang} />
                <CurriculoComponent lang={lang}/>
            </div>
            <h3 className="tecnologias-fav-title">{fav}</h3>
            <div className="grid-bar-tech-fav"></div>
            <div className="tech-icons-container">
                <div className="first-line">
                    <img src="gen/js-icon.png" alt="" />
                    <img src="gen/react-icon.png" alt="" />
                    <img src="gen/tailwind-icon.png" alt="" />
                    <img src="gen/figma-icon.png" alt="" />
                    <img src="gen/laravel-icon.png" alt="" />
                    <img src="gen/node-icon.png" alt="" />
                    <img src="gen/docker-icon.png" alt="" />
                    <img src="gen/python-icon.png" alt="" />
                </div>
                <div className="second-line">
                    <img src="gen/vercel-icon.ico" alt="" />
                    <img src="gen/css-icon.png" alt="" />
                    <img src="gen/postgres-icon.png" alt="" />
                    <img src="gen/github-icon.png" alt="" />
                    <img src="gen/typescript-icon.png" alt="" />
                    <img src="gen/next-icon.png" alt="" />
                </div>
            </div>
        </div>    
    )
}

export default AboutMe;