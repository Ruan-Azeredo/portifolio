import ProjetoCard from "./ProjetoCard";
import Title from "./Title";

export default function Projetos() {
    return (
        <div>
            <Title title='PROJETOS'/>
            <ProjetoCard
                name='MyBooks'
                icon1='next-icon.png'
                icon2='firebase-icon.png'
                icon3='tailwind-icon.png'
                screen='telamybooks.png'
                description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
            />
        </div>
    )
}