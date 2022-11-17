import ProjetoCard from "./ProjetoCard";
import Title from "./Title";

export default function Projetos() {
    return (
        <div><a name='projetos'></a>
            <Title title='PROJETOS'/>
            <div className="divisao-col-projetos">
                <div className="col1">
                    <ProjetoCard
                        name='MyBooks'
                        icon1='next-icon.png'
                        icon2='firebase-icon.png'
                        icon3='tailwind-icon.png'
                        screen='telamybooks.png'
                        description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
                    />
                    <ProjetoCard
                        name='MyBooks'
                        icon1='next-icon.png'
                        icon2='firebase-icon.png'
                        icon3='tailwind-icon.png'
                        screen='telamybooks.png'
                        description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
                    />
                </div>
                <div className="col2">
                <ProjetoCard
                        name='MyBooks'
                        icon1='next-icon.png'
                        icon2='firebase-icon.png'
                        icon3='tailwind-icon.png'
                        screen='telamybooks.png'
                        description='Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
                    />
                </div>
            </div>
        </div>
    )
}