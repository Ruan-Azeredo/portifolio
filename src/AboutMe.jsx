import CurriculoComponent from "./CurriculoComponent";
import Title from "./Title";
import VsScreenComponent from "./VsScreenComponent";

function AboutMe() {
    return (
        <div className="AboutMe">
            <Title title='SOBRE MIM'/>

            <div className="aboutme-container">
                <VsScreenComponent />
                <CurriculoComponent/>
            </div>
        </div>
    )
}

export default AboutMe;