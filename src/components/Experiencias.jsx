import { Tooltip } from '@nextui-org/react'
import React from 'react'
import { xp } from '../data'

const Experiencias = () => {
    var disable
    window.screen.width < 600 ? disable = true : disable = false

    return (
        <div className='bg-transparent mx-[5%] rounded-xl p-[2px] text-white relative md:-top-16 mb-10'>
            <h1>
                CONHECIMENTOS
            </h1>
            <div className='ml-3 mb-4 text-[#909090] font-regular text-[14px] md:text-[16px] '>
                <div className='hidden md:block'>
                    Linguagens, métodologias, frameworks, conceitos e tecnologias que aprendi e tive
                </div>
                <div className='hidden md:block'>
                   contato ao longo da minha trajetoria como Desenvolvedor em diversos lugares e projetos.
                </div>
                <div className='block md:hidden'>
                    Linguagens, métodologias, frameworks, conceitos e tecnologias que aprendi e tive contato ao longo da minha trajetoria como Desenvolvedor em diversos lugares e projetos.
                </div>
            </div>
            <div className='bg-black rounded-xl'>
                <div className='flex flex-wrap pb-4 md:pb-5 w-full justify-evenly rounded-lg'>
                {xp.map(item => (
                        <Tooltip content={item[1]} css={{maxWidth: "200px"}} isDisabled={disable}>
                            <div className="bg-gradient-to-r from-azulescuro to-azulclaro w-fit mt-4 md:mt-5 mx-1 md:mx-3 rounded-md">
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