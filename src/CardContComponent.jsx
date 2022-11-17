export default function CardContComponent(props) {
    const grayscale = props.grayscale

    if (!grayscale) {
        return (
            <a href={`${props.link}`}>
                <div className="minicard-contato">
                    <div className="icon-label">
                        <img src={props.icon} alt="" />
                        <div>{props.name}</div>
                    </div>
                    <div className="minicard-route">{props.route}</div>
                </div>
            </a>
        )
    } else {
        return (
            <a href={`${props.link}`}>
                <div className="minicard-contato-gray">
                    <div className="icon-label">
                        <img src={props.icon} alt="" />
                        <div>{props.name}</div>
                    </div>
                    <div className="minicard-route">{props.route}</div>
                </div>
            </a>
        )
    }
}