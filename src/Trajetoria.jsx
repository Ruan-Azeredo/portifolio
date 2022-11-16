import CardComponent from "./CardComponent";
import Title from "./Title";

export default function Trajetoria() {
    return (
        <div>
            <Title title='Trajetoria' grayscale={true}/>
            <div className="time-line-container">
                <CardComponent name='UFES' logo='logo-ufes.png' description='Entro na Empresa Junior da Comnputação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como progrmar e ter a conte....'/>
                <div className="time-line">
                    <div className="date-container date-l">
                        <div className="date">ABR/2021</div><div className="time-circle c-1"></div>
                    </div>
                    <div className="time-line-gradient"></div>
                    <div className="date-container date-r">
                        <div className="time-circle c-2"></div><div className="date">ABR/2021</div>
                    </div>  
                </div>
                <CardComponent name='Adapti' logo='logo-adapti.png' mt='mt' description='Entro na Empresa Junior da Comnputação da Faculdade, empresa a qual não tem fins lucrativos para os membros, e que faço parte até hoje, nela aprendi como progrmar e ter a conte....'/>
            </div>
        </div>
    )
}