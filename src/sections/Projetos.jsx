import ProjetoCard from "../components/ProjetoCard";
import Title from "../components/Title";

export default function Projetos() {
    return (
        <div><a name='projetos'></a>
            <Title title='PROJETOS'/>
            <div className="divisao-col-projetos">
                <div className="col1">
                    <ProjetoCard
                        name='MyBooks'
                        icon1='next-icon.png'
                        icon2='node-icon.png'
                        icon3='firebase-icon.png'
                        screen='telamybooks.png'
                        description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados, que se comunicam via API.'
                        link='https://github.com/Ruan-Azeredo/MyBooks'
                    />
                    <ProjetoCard
                        name='e-diaristas'
                        icon1='next-icon.png'
                        icon2='stayled-icon.png'
                        icon3='laravel-icon.png'
                        screen='telaediaristas.png'
                        description='Este projeto foi desenvolvido no bootcamp da TreinaWeb, e consiste em um sistema com Back-end em Laravel onde pode-se cadastrar diaristas e gera uma API. A parte do Front-end foi desenvolvida em Next.js, onde o usuario digita um cep e o sistema mostra os diaristas presentes proximas ao cep.'
                        link='https://github.com/Ruan-Azeredo/Bootcamp-Next-e-diaristas'
                    />
                </div>
                <div className="col2">
                <ProjetoCard
                        name='Crud'
                        icon1='react-icon.png'
                        icon2='node-icon.png'
                        icon3='tailwind-icon.png'
                        screen='telacrud.png'
                        description='Um CRUD, que é uma aplicação simples que permite adicionar, ver, editar e excluir informações. Neste projeto o CRUD trabalha com usuarios, coletando seus nomes e emails, alem de gera um ID para cada.
                        O Front-end deste projeto foi desenvolvido em React.js, e o Back-end em Node.js.'
                        link='https://github.com/Ruan-Azeredo/crud-usuarios-React-'
                    />
                </div>
            </div>
        </div>
    )
}