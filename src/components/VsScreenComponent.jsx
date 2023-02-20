import { sobreMim } from "../data";

export default function VsScreenComponent() {
    return (
        <div>
            <div className="border-gradient z-10"><div className="inside-gradient">
                <div className="backgr-black background-black-screen">
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
                                <div className="gradient-bar-screen"></div>
                                <p className="inside-function-ruan">{sobreMim}</p>
                            </div>
                            <p className="ruan-close-function">&#125;</p>
                        </div>
                    </div>
                </div>
            </div></div>
        </div>
    )
}