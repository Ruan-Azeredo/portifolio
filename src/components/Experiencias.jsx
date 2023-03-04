import { Tooltip } from '@nextui-org/react'
import React from 'react'
import { xp } from '../data'

const Experiencias = () => {
    return (
        <div className='bg-transparent mx-[5%] rounded-xl p-[2px] text-white relative -top-16 mb-10'>
            <h1>
                CONHECIMENTOS
            </h1>
            <div className='ml-3 mb-4 text-[#909090] font-regular text-[14px] md:text-[16px] '>
                <div>
                    Linguagens, métodologias, frameworks, conceitos e tecnologias que aprendi e tive
                </div>
                <div>
                   contato ao longo da minha trajetoria como Desenvolvedor em diversos lugares e projetos.
                </div>
            </div>
            <div className='bg-black rounded-xl'>
                <div className='flex flex-wrap pb-5 w-full justify-evenly rounded-lg'>
                {xp.map(item => (
                        <Tooltip content={item[1]} css={{maxWidth: "200px"}}>
                            <div className="bg-gradient-to-r from-azulescuro to-azulclaro w-fit mt-5 mx-3 rounded-md">
                                <div className={`bg-black border-grayy border-2 px-4 py-1 rounded-md text-white relative -left-[2px] -top-[2px] hover:translate-y-[2px] hover:translate-x-[2px] transition ease-in-out delay-100`}>
                                    {item[0]}
                                </div>
                            </div>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <style jsx>{`
                h1{
                    font-family: 'Roboto';
                    font-weight: 400;
                    font-size: 32px;
                    color: #909090;
                    letter-spacing: 0.1em;
                    margin: 12px 12px 5px 12px;
                }
            `}</style>
        </div>
    )
}

export default Experiencias