import CurriculoComponent from "./CurriculoComponent";
import VsScreenComponent from "./VsScreenComponent";

function AboutMe() {
    return (
        <div className="AboutMe">
            <h2>SOBRE MIM</h2>

            <div className="aboutme-container">
                <VsScreenComponent />
                <CurriculoComponent/>
            </div>
        </div>
    )
}

export default AboutMe;