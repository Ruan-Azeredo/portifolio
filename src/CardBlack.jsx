export default function CardBlack(props) {

    return (
        <div className='out-gradient'>
            <div className='in-gradient'>
                <div className='card-bg-black'>
                    {props.children}
                </div>
            </div>

            <style jsx>{`
                    .conteudo{
                        width: ${props.width};
                    }

                    .card-bg-black{
                        background-color: #202020;
                        padding: 40px;
                        width: fit-content;
                        border-radius: 10px;
                        position: relative;
                        top: -10px;
                        left: -10px;           
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
                        background: #2C3333;
                        width: fit-content;
                        border-radius: 10px;
                    }
                `}</style>
        </div>
    )
}
