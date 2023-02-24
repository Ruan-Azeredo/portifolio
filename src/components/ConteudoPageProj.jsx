import CardBlack from "./CardBlack";

export default function ConteudoPageProj(props) {

    const txt = props.txt

    var flexDirection = null
    if (props.index % 2 == 0) { flexDirection = 'flex-row-reverse' } else { flexDirection = 'flex-row' }

    return (
        <div className={`conteudo-container ${flexDirection}`}>
            <div className="card">
                <CardBlack>
                    {props.children}
                </CardBlack>
            </div>
            <div className="txt">{txt}</div>

            <style jsx>{`
                .conteudo-container{
                    display: flex;
                    margin: 60px 50px;
                }

                .conteudo-container .txt, .conteudo-container .card{
                    width: 50%;
                    margin: 0 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    text-align: justify;
                    color: white;
                }
            `}</style>
        </div>
    )
}