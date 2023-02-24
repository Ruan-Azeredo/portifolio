export default function CardContComponent(props) {
    const grayyscale = props.grayyscale

    if (!grayyscale) {
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
                <div className="minicard-contato-grayy">
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