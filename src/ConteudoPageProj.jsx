import CardBlack from "./CardBlack";

export default function ConteudoPageProj() {

    const img = 'telamybooks.png'
    const txt = 'O Front deste projeto foi desenvolvido com o Next, que é um Framework que funciona utilizando a biblioteca React, e que permite uma renderização Server Side. Para estilização, foi utilizado o Framework Tailwind CSS. Ainda no projeto em Next foram adicionadas outras dependencias para gereciamento de cookies, autenticação com a firebase e comunicação com a API do Back-end.'

    return (
        <div className="conteudo-container">
            <CardBlack>
                <img src={img} />
            </CardBlack>
            <div>{txt}</div>
        </div>
    )
}