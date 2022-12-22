import ConteudoPageProj from "./ConteudoPageProj"

export default function PageProjetoLayout() {
    const frontBack = true
    const title = 'MyBooks'
    const description = 'Este projeto consiste em uma aplicação onde o usuario pode cadastrar seus livros e resenhas do mesmo, para que assim tenha um lugar organizado e intuitivo para deixar suas reflexões sobre os livros lidos. O MyBooks foi desenvolvido com o Front-end e o Back-end separados.'
    const link = 'github.com/Ruan-Azeredo/MyBooks'
    const mainImg = 'telamybooks.png'

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
            <ConteudoPageProj/>

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
            `}</style>
        </div>
    )
}