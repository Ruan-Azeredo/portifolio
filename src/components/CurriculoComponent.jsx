export default function CurriculoComponent(props) {
    var lang = props.lang

    var a
    if (lang == 'PT' || lang == null) {
        a = 'VEJA MEU URRICULO'
    } else {
        a = 'SEE MY RESUME'
    }
    return (
        <div className=" backgr-black black-card-curriculo border-grayy border-2">
            <div className="border-gradient curriculo-border">
                <div className="inside-gradient bkg-black">
                    <img src="gen/A4-1.png" alt="" className="curriculo-img"/>
                </div>
            </div>
            <a className="link-curriculo" href="Curriculo-Ruan.pdf" download>{a}</a>
        </div>
    )
}