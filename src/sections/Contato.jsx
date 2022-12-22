import CardContComponent from "../CardContComponent";
import Title from "../Title";

export default function Contato() {
    return (
        <div className="contato-container"><a name='contato'></a>
            <div className="border-gradient-cont">
                <div className="inside-gradient-cont">
                    <div className="main-card-contato bg-black">
                        <div className="title-contato">Contato</div>
                        <div className="text-contato">Se gostou do meu trabalho, entre  em contato comigo, estou sempre em busca de veloução e aprendizado</div>
                    </div>
                    <div className="contatos-container">
                        <CardContComponent icon='whatsapp-icon.png' name='WhatsApp' route='+55 (27) 99602-7180' link='https://api.whatsapp.com/send?phone=5527996027180&text=Ola%2C%20vim%20do%20seu%20Postifolio'/>
                        <CardContComponent icon='linkedin-icon.png' name='Linkedin' route='linkedin.com/in/ruan-azeredo' grayscale={true} link='https://www.linkedin.com/in/ruan-azeredo/'/>
                        <CardContComponent icon='email-icon.png' name='Email' route='ruanazeredo@gmail.com' link='https://criarmeulink.com.br/u/1668649658'/>
                    </div>
                </div>
            </div>
        </div>
    )
}