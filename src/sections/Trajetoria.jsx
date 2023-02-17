import CardComponent from "../components/CardComponent";
import Title from "../components/Title";

export default function Trajetoria() {
    return (
        <div className="trajetoria-container"><a name='trajetoria'></a>
            <Title title='Trajetoria' grayscale={true}/>
                <div className="time-line">
                    <CardComponent name='UFES' logo='logo-ufes.png' description='Após terminar meu Ensino Médio, que foi atrelado ao Técnico em Mecânica, decidi que queria seguir a profissão de programador. Em função disso, entrei no curso de Engenharia da Computação, que curso na UFES' time='ABR/2021'/>
                    <CardComponent name='Adapti' logo='logo-adapti.png' description='Entrei na Empresa Junior da Computação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como programar e ter a contato com o mundo do desenvolvimento web.' time='SET/2021'/>
                    <div className="time-line-gradient"></div>
                </div>
            <div className="time-line-container"></div>
        </div>
    )
}