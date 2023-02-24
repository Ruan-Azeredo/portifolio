export default function CardBlack(props) {

    return (
        <div className='out-gradient'>
            <div className='in-gradient'>
                <div className='card-backgr-black'>
                    {props.children}
                </div>
            </div>

            <style jsx>{`
                    .conteudo{
                        width: ${props.width};
                    }

                    .card-backgr-black{
                        background-color: #161818;
                        width: fit-content;
                        border-radius: 10px;
                        position: relative;
                        top: -10px;
                        left: -10px;
                        padding: 0px;
                        border: solid gray 2px          
                    }

                    .out-gradient{
                        background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                        padding: 2px;
                        width: fit-content;
                        border-radius: 10px;
                        position: relative;
                        top: 10px;
                        left: 10px;
                    }

                    .in-gradient{
                        background: #161818;
                        width: fit-content;
                        border-radius: 10px;
                    }
                `}</style>
        </div>
    )
}
