import { redirect } from "react-router-dom";
import ProjetoCard from "../components/ProjetoCard";
import Title from "../components/Title";
import { projetos } from "../data";

export default function Projetos(props) {
    let projetosArray
    if (props.index) {
        projetosArray = projetos.slice(0, 3)
    } else {
        projetosArray = projetos
    }

    return (
        <div className="mt-40"><a name='projetos'></a>
            <Title title='PROJETOS'/>
            <div className="flex flex-col gap-20 md:gap-36">
                {projetosArray.map(item => (
                    <ProjetoCard key={item} infos={item} />
                ))}
            </div>
            <a href="/projetos">
                <div className="bg-gradient-to-r from-azulescuro to-azulclaro mx-auto w-fit mt-16 rounded-md">
                    <div className="bg-black border-grayy border-2 px-8 py-3 rounded-md text-white relative -left-[6px] -top-[6px] hover:translate-y-1 hover:translate-x-1 transition ease-in-out delay-100">
                        VER MAIS +
                    </div>
                </div>
            </a>
            <style jsx>{`
                button {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: justify;
                }    
            `}</style>
        </div>
    )
}