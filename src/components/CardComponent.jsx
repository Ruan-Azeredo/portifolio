export default function CardComponent(props) {
    return (
        <div className="card-traj">
            <h3 className="title-traj">{props.name}</h3>
            <div className="card-infos-traj">
                <div className="bg-logo-traj">
                    <img src={props.logo} alt="" />
                </div>
                <p className="description-traj">{props.description}</p>
            </div>
            <div className="gradient-bot"></div>
        </div>
    )
}