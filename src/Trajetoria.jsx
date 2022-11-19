import CardComponent from "./CardComponent";
import Title from "./Title";

export default function Trajetoria() {
    return (
        <div className="trajetoria-container"><a name='trajetoria'></a>
            <Title title='Trajetoria' grayscale={true}/>
                <div className="time-line">
                    <div className="date-container date-l">
                        <div className="date">ABR/2021</div><div className="time-circle c-1"></div>
                        <CardComponent name='UFES' logo='logo-ufes.png' description='Após terminar meu Ensino Médio, que foi atrelado ao Técnico em Mecânica, decidi que queria seguir a profissão de programador. Em função disso, entrei no curso de Engenharia da Computação, que curso na UFES de São Mateus.'/>
                    </div>
                    <div className="date-container date-r">
                        <div className="date">SET/2021</div><div className="time-circle c-2"></div>
                        <CardComponent name='Adapti' logo='logo-adapti.png' description='Entrei na Empresa Junior da Computação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como programar e ter a contato com o mundo do desenvolvimento web.'/>
                    </div>  
                    <div className="time-line-gradient"></div>
                </div>
            <div className="time-line-container"></div>
        </div>
    )
}