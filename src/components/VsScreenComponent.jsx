import { aboutMe, sobreMim } from "../data";

export default function VsScreenComponent(props) {
    var lang = props.lang

    var aM
    if (lang == 'PT' || lang == null) {
        aM = sobreMim
    } else {
        aM = aboutMe
    }
    return (
        <div>
            <div className="border-gradient z-10"><div className="inside-gradient">
                <div className="backgr-black background-black-screen border-grayy border-2">
                    <div className="navbar-screen">
                        <div className="options-screen">
                            <div className="circle-screen red-c"></div>
                            <div className="circle-screen yellow-c"></div>
                            <div className="circle-screen green-c"></div>
                        </div>
                        <div className="index-screen">Index.js</div>
                        <div className="complete-nav-screen"></div>
                    </div>
                    <div className="container-screen-bot">
                        <div className="sidebar-screen"></div>
                        <div className="description-screen-container">
                            <p className="ruan-function">Ruan() &#123;</p>
                            <div className="inside-function">
                                <div className="gradient-bar-screen bg-gradient-to-b from-azulescuro to-azulclaro h-auto w-2"></div>
                                <p className="inside-function-ruan">{aM}</p>
                            </div>
                            <p className="ruan-close-function">&#125;</p>
                        </div>
                    </div>
                </div>
            </div></div>
        </div>
    )
}