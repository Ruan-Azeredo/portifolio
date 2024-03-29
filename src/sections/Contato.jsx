import { useContext } from "react";
import CardContComponent from "../components/CardContComponent";
import Title from "../components/Title";
import LanguageContext from "../context/LanguageContext";

export default function Contato() {
    const { lang } = useContext(LanguageContext)
    
    var p
    if (lang == 'PT' || lang == null) {
        p = 'Se gostou do meu trabalho, entre  em contato comigo, estou sempre em busca de evolução e aprendizado'
    } else {
        p ='If you liked my job and projects, enter in contact with me, I always looking for evolution and apprenticeship'
    }

    return (
        <div className="flex flex-col items-center"><a name='contato'></a>
            <div className="flex flex-col items-center">
                <Title grayyscale={true} title={p[0] == 'S' ? "CONTATO" : 'CONTACT'}/>
                <div className="text-contato w-[300px] md:w-[500px]">{p}</div>
                <div className="flex flex-col md:flex-row my-10 gap-8 text-white">
                    <div className="bg-black py-4 px-4 border-grayy border-2 rounded-lg flex gap-4 items-center hover:bg-slate-800 group">
                        <img className="h-10 w-10" src="gen/174857.png" alt="" />
                        <div>ruan-azeredo</div>
                    </div>
                    <div className="bg-black py-4 px-4 border-grayy border-2 rounded-lg flex gap-4 items-center hover:bg-slate-800 group">
                        <img className="h-10 w-10" src="gen/174879.png" alt="" />
                        <div>+55 (27) 99602-7180</div>
                    </div>
                    <div className="bg-black py-4 px-4 border-grayy border-2 rounded-lg flex gap-4 items-center hover:bg-slate-800 group">
                        <img className="h-10 w-10" src="gen/281769.png" alt="" />
                        <div>ruanazeredo@gmail.com</div>
                    </div>
                </div>
            </div>
            {/* <div className="border-gradient-cont">
                <div className="inside-gradient-cont">
                    <div className="main-card-contato backgr-black">
                        
                    </div>
                    <div className="contatos-container">
                        <CardContComponent icon='whatsapp-icon.png' name='WhatsApp' route='+55 (27) 99602-7180' link='https://api.whatsapp.com/send?phone=5527996027180&text=Ola%2C%20vim%20do%20seu%20Postifolio'/>
                        <CardContComponent icon='linkedin-icon.png' name='Linkedin' route='linkedin.com/in/ruan-azeredo' grayyscale={true} link='https://www.linkedin.com/in/ruan-azeredo/'/>
                        <CardContComponent icon='email-icon.png' name='Email' route='ruanazeredo@gmail.com' link='https://criarmeulink.com.br/u/1668649658'/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}