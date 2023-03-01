export default function Title(props) {
    const grayyscale = props.grayyscale
    if (grayyscale) {
        return (
            <h2 className="title grayyscale">{ props.title }</h2>
        )   
    } else {
        return (
            <h2 className="title bluescale">{ props.title }</h2>
        )
    }
}