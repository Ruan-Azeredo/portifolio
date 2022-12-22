import CardBlack from "./CardBlack";

export default function ConteudoPageProj(props) {

    const txt = 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next foram adicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'

    const flexDirection = 'row-reverse'

    return (
        <div className="conteudo-container">
            <div className="card">
                <CardBlack>
                    {props.children}
                </CardBlack>
            </div>
            <div className="txt text-gray-300">{txt}</div>

            <style jsx>{`
                .conteudo-container{
                    display: flex;
                    flex-direction: ${flexDirection}
                }

                .conteudo-container .txt, .conteudo-container .card{
                    width: 50%;
                    margin: 0 30px 0 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 29px;
                    text-align: justify;
                }
            `}</style>
        </div>
    )
}