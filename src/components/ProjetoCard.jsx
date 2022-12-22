export default function ProjetoCard(props) {
    return (
        <div className="gradient-bg">
            <div className="inside-bg">
                <div className="card-black">
                    <div className="nav-card">
                        <div className="card-name">{props.name}</div>
                        <div className="icons-card">
                            <img src={props.icon1} alt="" />
                            <img src={props.icon2} alt="" />
                            <img src={props.icon3} alt="" />
                        </div>
                    </div>
                    <img className="img-card" src={props.screen} alt="" />
                    <div className="infos-card">
                        <p className="txt-card">{props.description}</p>
                        <a href={props.link} className="git-button"><img src="github-icon.png" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}