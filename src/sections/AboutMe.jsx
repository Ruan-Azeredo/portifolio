import CurriculoComponent from "../components/CurriculoComponent";
import Title from "../components/Title";
import VsScreenComponent from "../components/VsScreenComponent";

function AboutMe() {
    return (
        <div className="AboutMe"><a name='sobremim'></a>
            <Title title='SOBRE MIM'/>

            <div className="aboutme-container">
                <VsScreenComponent />
                <CurriculoComponent/>
            </div>
            <h3 className="tecnologias-fav-title">TECNOLOGIAS FAVORITAS</h3>
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