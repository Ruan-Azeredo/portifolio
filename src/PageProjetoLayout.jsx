export default function PageProjetoLayout() {
    const frontBack = true
    const title = 'MyBooks'
    const description = 'Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
    const link = 'github.com/Ruan-Azeredo/MyBooks'
    const mainImg = 'telamybooks.png'

    return (
        <div>
            {frontBack ? (
                <div className="nav">
                    <div>FRONT-END</div>
                    <div>BACK-END</div>
                </div>
            ) : null}
            <div className="header">
                <div className="title-project">{title}</div>
                <div className="header-content">
                    <div className="left-side">
                        <div className="descrition">{description}</div>
                        <div className="git-container">
                            <img src="github-icon.png"/>
                            <div>{link}</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src={mainImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}