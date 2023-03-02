import { useState } from "react"
import { Link } from "react-router-dom"
import ConteudoPageProj from "./components/ConteudoPageProj"
import { Arrow } from "./icons/Arrow"
import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import ModalButton from "./components/ModalButton";

export default function PageProjetoLayout(props) {
    const infos = props.infos

    const frontAndBack = infos.frontBack
    const title = infos.title
    const description = infos.description
    const linkFront = infos.linkFront
    const linkBack = infos.linkBack
    const mainImg = infos.mainImg
    const type = infos.type
    const conteudo = infos.conteudo

    var link = null
    var adaptiHidden
    if (linkFront) { link = linkFront } else { link = linkBack }
    if (linkBack && linkFront) { adaptiHidden = '' } else { adaptiHidden = 'hidden' }
    console.log('adaptihidden: ',adaptiHidden)

    const [display, setDisplay] = useState(['', 'hidden'])
    const [github, setGithub] = useState(link)

    const HandleSetDisplay = (value) => {
        if(value == 'front') {
            setDisplay(['', 'hidden'])
            setGithub(linkFront)
        } else {
            setDisplay(['hidden', ''])
            setGithub(linkBack)
        }
    }

    const [visible, setVisible] = React.useState(false);
    const [imginfo, setImginfo] = useState()
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <div>
            {frontAndBack ? (
                <div className="nav">
                    <div className="container-with-arrow">
                        <Link to='/'><Arrow/></Link>
                        <div className="nav-container">
                            <button className="navbar-item" onClick={() => HandleSetDisplay('front')}>FRONT-END</button>
                            <button className="navbar-item" onClick={() => HandleSetDisplay('back')}>BACK-END</button>
                        </div>
                    </div>
                    <div className="line-gradient"></div>
                </div>
            ) : null}
            <div className="header">
                <div className="title-project">{title}</div>
                <div className="header-content">
                    <div className="left-side">
                        <div className="description">{description}</div>
                        <div className="flex gap-4 py-2 mt-4">
                            {infos.icons?.map(item => (
                                <div key={item}>
                                    <img className="h-8 saturate-0" src={`gen/${item}`} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 py-2 mt-4">
                            {infos.tags?.map(item => (
                                <div key={item} className="bg-gray-800 text-white px-3 py-1 rounded-md">{item}</div>
                            ))}
                        </div>
                        <div className="git-container">
                            <img src="gen/github-icon.png" className={adaptiHidden} />
                            <a  href={'https://' + github}>{github}</a>
                        </div>
                    </div>
                    <div className="right-side md:mr-20">
                        <img src={`projects/${mainImg}`} className="max-h-[380px]"/>
                    </div>
                </div>
            </div>
            <div className='gradient grad-1'></div>
            <div className='gradient grad-2'></div>
            {type != 'back' ? (
                <div className={`front-container ${display[0]}`}>
                    <div className="tag-type">
                        <div>FRONT-END</div>
                        <div className="line-gradient"></div>
                    </div>
                    {conteudo.front.map((resp, index) => {
                        const className = resp.img[0] === 'L' ? 'w-[350px] p-10' : 'w-[450px]';
                        return (
                            <div key={index}>
                                <ConteudoPageProj txt={resp.txt} index={index}>
                                    <ModalButton img={`projects/${resp.img}`}>
                                        <img src={`projects/${resp.img}`} className={`rounded-md ${className}`} />
                                    </ModalButton>
                                </ConteudoPageProj>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {type != 'front' ? (
                <div className={`back-container ${display[1]}`}>
                    <div className="tag-type">
                        <div>BACK-END</div>
                        <div className="line-gradient"></div>
                    </div>
                    {conteudo.back.map((resp, index) => {
                        const className = resp.img[0] === 'L' ? 'w-[350px] p-10' : 'w-[450px]';
                        return (
                            <div key={index}>
                                <ConteudoPageProj txt={resp.txt} index={index}>
                                    <ModalButton img={`projects/${resp.img}`}>
                                        <img src={`projects/${resp.img}`} className={`rounded-md ${className}`} />
                                    </ModalButton>
                            </ConteudoPageProj>
                            </div>
                        );
                    })}
                </div>
            ) : null}

            <style jsx>{`
                .nav-container{
                    display: flex;
                    gap: 40px;
                    padding: 20px
                }

                .navbar-item{
                    margin: 0 auto;
                    font-family: 'Inter', sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 15px;
                    color: var(--white);
                    display: flex;
                    flex-direction: column;
                }

                .navbar-item::after{
                    content: '';
                    width: 0px;
                    height: 3px;
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                    transition: width 0.3s;
                }

                .navbar-item:hover::after{
                    width: 50px;
                }

                .nav  .line-gradient{
                    height: 3px;
                    background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                }

                .nav .container-with-arrow{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 30px
                }

                .header{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    text-align: justify;
                }

                .header .title-project{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 36px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    margin: 40px 0 50px 0;
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
                    padding: 40px 50px 40px 100px;
                }

                .header-content .description{
                    align-items: center;
                    justify-content: center;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 23px;
                    text-align: justify;
                    color: #FFFFFF;
                }

                .header-content .git-container{
                    margin-top: 60px;
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
                    margin: 40px 50px 100px 100px;
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

                @media (max-width: 550px){
                    .header .header-content{
                        flex-direction: column-reverse;
                    }

                    .header .header-content .left-side{
                        width: 100%;
                        padding: 20px 25px;
                    }

                    .header-content .git-container{
                        margin-top: 30px;
                         
                    }

                    .right-side{
                        padding: 25px;
                    }

                    .header .title-project{
                        text-align: left;
                        line-height: 55px;
                        margin: 40px 20px 50px 20px;
                    }
                }
            `}</style>
        </div>
    )
}