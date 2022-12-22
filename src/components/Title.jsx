export default function Title(props) {
    const grayscale = props.grayscale
    if (grayscale) {
        return (
            <h2 className="title grayscale">{ props.title }</h2>
        )   
    } else {
        return (
            <h2 className="title bluescale">{ props.title }</h2>
        )
    }
}