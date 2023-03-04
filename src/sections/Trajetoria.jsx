import CardComponent from "../components/CardComponent";
import Experiencias from "../components/Experiencias";
import Title from "../components/Title";
import { trajetorias } from "../data";

export default function Trajetoria() {
    return (
        <div className="trajetoria-container pt-24"><a name='trajetoria'></a>
            <Title title='TRAJETORIA' grayyscale={true}/>
            <div className="time-line relative top-16 gap-8 md:gap-0">
            {trajetorias.map(item => (
                    <CardComponent infos={item}/>
                ))}
                <div className="time-line-gradient"></div>
            </div>
            <Experiencias/>
        </div>
    )
}