import ConteudoPageProj from "./ConteudoPageProj"

export default function PageProjetoLayout() {
    const frontBack = true
    const title = 'MyBooks'
    const description = 'Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
    const link = 'github.com/Ruan-Azeredo/MyBooks'
    const mainImg = 'telamybooks.png'

    const conteudo = [
        {
            img: 'telamybooks.png',
            txt: 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next foram adicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'
        },
        {
            img: 'telacrud.png',
            txt: 'O Fdicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'
        }
    ]

    const type = 'front'
    var tag = null
    type == 'front' ? tag = 'FRONT-END' : tag = 'BACK-END'

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
                        <div className="description">{description}</div>
                        <div className="git-container">
                            <img src="github-icon.png"/>
                            <a  href={'https://' + link}>{link}</a>
                        </div>
                    </div>
                    <div className="right-side">
                        <img src={mainImg} />
                    </div>
                </div>
            </div>
            <div className="tag-type">
                <div>{tag}</div>
                <div className="line-gradient"></div>
            </div>
            {conteudo.map((resp, index) => (
                <ConteudoPageProj txt={resp.txt} index={index}>
                    <img src={resp.img} className="w-[300px]" />
                </ConteudoPageProj>
            ))}

            <style jsx>{`
                .nav{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding: 15px 0                    
                }

                .nav div{
                    margin: 0 40px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    color: #E7F6F2;
                }

                .nav div:hover{
                    color: #41ABCC;
                    cursor: pointer
                }

                .header .title-project{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 36px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    margin: 40px 0
                }
                .header .header-content{
                    display: flex;
                    flex-direction: row
                }

                .header-content .left-side{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }

                .header-content .description{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 29px;
                    text-align: justify;
                    color: #FFFFFF;
                    margin: 0 50px;
                }

                .header-content .git-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    font-family: 'Inconsolata';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    color: #FFFFFF;
                    gap: 15px;
                    align-items: center;                  
                }

                .git-container img{
                    width: 20px;
                    height: 20px;
                }
                
                .tag-type{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 24px;
                    color: #FFFFFF;
                    margin: 40px 50px 0 50px;
                    position: relative;
                    top: 20px;
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    align-items: center;
                }

                .tag-type .line-gradient{
                    width: 100px;
                    height: 3px;
                    background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                }
            `}</style>
        </div>
    )
}