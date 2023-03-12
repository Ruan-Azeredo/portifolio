import { useContext } from "react";
import CardComponent from "../components/CardComponent";
import Experiencias from "../components/Experiencias";
import Title from "../components/Title";
import LanguageContext from "../context/LanguageContext";
import { trajetorias, trajetoriasEN } from "../data";

export default function Trajetoria() {
    const { lang } = useContext(LanguageContext)

    var tr
    if (lang == 'PT' || lang == null) {
        tr = trajetorias
    } else {
        tr = trajetoriasEN
    }

    return (
        <div className="trajetoria-container pt-24"><a name='trajetoria'></a>
            <Title title={tr == trajetorias ? 'TRAJETORIA' : 'TRAJECTORY'} grayyscale={true}/>
            <div className="time-line relative top-16 gap-8 md:gap-0">
            {tr.map(item => (
                    <CardComponent infos={item}/>
                ))}
                <div className="time-line-gradient"></div>
            </div>
            <Experiencias/>
        </div>
    )
}