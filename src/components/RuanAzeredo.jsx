import React from 'react'

const RuanAzeredo = () => {
  return (
    <div className='name flex flex-col h-14 text-[36px] md:h-20 md:text-[64px]'>
        <div className='text-white z-20'>Ruan Azeredo</div>
        <div className='n-gradient relative -top-[51px] left-[2px] md:-top-[92px] md:left-1'>Ruan Azeredo</div>
        <style jsx>{`
            .name{
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 500;
            }

            .n-gradient{
                background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `}</style>
    </div>
  )
}

export default RuanAzeredo