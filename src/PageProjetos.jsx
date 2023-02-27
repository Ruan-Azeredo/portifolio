import React from 'react'
import Projetos from './sections/Projetos'

const PageProjetos = () => {
    return (
        <div className='mt-[-4rem]'>
            <Projetos index={false} />
            <div className='gradient grad-1'></div>
            <div className='gradient grad-2'></div>
            <div className='gradient grad-3'></div>
            {/* caso eu adicione mais prjetos add + gradiente */}
        </div>
    )
}

export default PageProjetos