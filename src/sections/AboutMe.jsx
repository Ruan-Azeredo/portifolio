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
                    <img src="js-icon.png" alt="" />
                    <img src="react-icon.png" alt="" />
                    <img src="tailwind-icon.png" alt="" />
                    <img src="figma-icon.png" alt="" />
                    <img src="laravel-icon.png" alt="" />
                    <img src="node-icon.png" alt="" />
                    <img src="docker-icon.png" alt="" />
                </div>
                <div className="second-line">
                    <img src="next-icon.png" alt="" />
                    <img src="css-icon.png" alt="" />
                    <img src="postgres-icon.png" alt="" />
                    <img src="github-icon.png" alt="" />
                </div>
            </div>
        </div>    
    )
}

export default AboutMe;