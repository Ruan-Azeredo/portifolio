import CardComponent from "../components/CardComponent";
import Title from "../components/Title";
import { trajetorias } from "../data";

export default function Trajetoria() {
    return (
        <div className="trajetoria-container"><a name='trajetoria'></a>
            <Title title='Trajetoria' grayscale={true}/>
                <div className="time-line relative top-16 gap-8 md:gap-0">
                {trajetorias.map(item => (
                        <CardComponent infos={item}/>
                    ))}
                    <div className="time-line-gradient"></div>
                </div>
            <div className="time-line-container"></div>
        </div>
    )
}