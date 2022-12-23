import { useState } from "react"
import ConteudoPageProj from "./components/ConteudoPageProj"

export default function PageProjetoLayout(props) {
    const frontAndBack = props.frontBack
    const title = props.title
    const description = props.description
    const link = props.link
    const mainImg = props.mainImg
    const type = props.type
    const conteudo = props.conteudo

    const [display, setDisplay] = useState(['', 'hidden'])

    const HandleSetDisplay = (value) => {
        value == 'front' ? setDisplay(['', 'hidden']) : setDisplay(['hidden', ''])
    }

    return (
        <div>
            {frontAndBack ? (
                <div className="nav">
                    <div className="nav-container">
                        <button onClick={() => HandleSetDisplay('front')}>FRONT-END</button>
                        <button onClick={() => HandleSetDisplay('back')}>BACK-END</button>
                    </div>
                    <div className="line-gradient"></div>
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
            {type != 'back' ? (
                <div className={`front-container ${display[0]}`}>
                    <div className="tag-type">
                        <div>FRONT-END</div>
                        <div className="line-gradient"></div>
                    </div>
                    {conteudo.front.map((resp, index) => (
                        <ConteudoPageProj txt={resp.txt} index={index}>
                            <img src={resp.img} className="w-[300px] rounded-md" />
                        </ConteudoPageProj>
                    ))}
                </div>
            ) : null}
            {type != 'front' ? (
                <div className={`back-container ${display[1]}`}>
                    <div className="tag-type">
                        <div>BACK-END</div>
                        <div className="line-gradient"></div>
                    </div>
                    {conteudo.back.map((resp, index) => (
                        <ConteudoPageProj txt={resp.txt} index={index}>
                            <img src={resp.img} className="w-[300px] rounded-md" />
                        </ConteudoPageProj>
                    ))}
                </div>
            ) : null}

            <style jsx>{`
                .nav{
                    position: sticky;
                    top: 0
                }

                .nav .nav-container{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    padding: 15px 0;
                    background-color: #2C3333;                  
                }

                .nav .nav-container button{
                    margin: 0 40px;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    color: #E7F6F2;
                }

                .nav .nav-container button:hover{
                    color: #41ABCC;
                    cursor: pointer
                }

                .nav  .line-gradient{
                    height: 3px;
                    background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                }

                .header .title-project{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 36px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    margin: 20px 0 50px 0;
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

                .header-content .right-side img{
                    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
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