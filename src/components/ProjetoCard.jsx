import { Eyeslash } from "../icons/Eyeslash"

export default function ProjetoCard(props) {
    const infos = props.infos

    var flexDirection, hidden
    infos.id % 2 == 0 ? flexDirection = 'md:flex-row-reverse' : flexDirection = 'md:flex-row'
    infos.adapti == true ? hidden = null : hidden = 'hidden'

    return (
        <div className={`ProjetoCard flex flex-col ${flexDirection} group px-5 md:px-20 gap-10 relative justify-between`}>
            <div className="md:w-1/2 text-white flex flex-col gap-4">
                <div className="text-xl my-4 name-prj">{infos.name}</div>
                <div className="text-[14px] md:text-[16px] text-gray-300">{infos.description}</div>
                <div className="flex gap-4 py-2">
                    {infos.icons?.map(item => (
                        <div key={item}>
                            <img className="h-8 saturate-0" src={`gen/${item}`} alt="" />
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 py-2">
                    {infos.tags?.map(item => (
                        <div key={item} className="bg-neutral-800 rounded-md px-3 py-1 group-hover:bg-gray-800 min-w-fit">{item}</div>
                    ))}
                </div>
                {/* <div className="flex gap-4">
                    {infos.adapti == true ? (
                        <a href={infos.link} className="h-8 flex py-1 px-8 w-fit border-2 border-gray-500 rounded-md">
                            <Eyeslash/>
                        </a>
                    ) : (
                        <a href={infos.link} className="h-8 flex py-1 px-8 w-fit border-2 rounded-md">
                            <img src="gen/github-icon.png" alt="" />
                        </a>
                    )}
                    {infos.seeMore ? (
                        <a href={infos.seeMore} className="py-1 px-3 w-fit border-2 rounded-md text-sm">VER MAIS +</a>
                    ) : null}
                </div> */}
            </div>
            <div className="relative justify-end flex saturate-0 group-hover:saturate-100 group-hover:-translate-y-2 transition ease-in-out delay-150 flex-col items-center">
                <img src={`projects/${infos.screen}`} alt="" className="my-auto max-h-[380px] object-contain" />
                <div className="flex gap-4 mt-6">
                    {infos.adapti == true ? (
                        <a href={infos.link} className="h-8 flex py-1 px-8 w-fit border-2 border-gray-500 rounded-md group-hover:translate-y-2 transition ease-in-out delay-300">
                            <Eyeslash/>
                        </a>
                    ) : (
                        <a href={infos.link} className="h-8 flex py-1 px-8 w-fit border-2 rounded-md group-hover:translate-y-2 transition ease-in-out delay-300">
                            <img src="gen/github-icon.png" alt="" />
                        </a>
                    )}
                    {infos.seeMore ? (
                        <a href={infos.seeMore} className="py-1 px-3 w-fit border-2 rounded-md text-sm group-hover:translate-y-2 transition ease-in-out delay-300">VER MAIS +</a>
                    ) : null}
                </div>
                <div className={`${hidden} bg-gradient-to-r from-azulescuro to-azulclaro text-white font-medium rounded-md py-1 px-5 w-fit absolute top-[170px] md:top-72 md:left-5 left-3`}>Adapti</div>
            </div>
            <style jsx>{`
                .ProjetoCard {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 22px;
                    text-align: justify;
                }

                .name-prj{
                    width: fit-content;
                    display: flex;
                    flex-direction: column
                }

                .name-prj::after{
                    content: '';
                    width: 0px;
                    height: 3px;
                    position: relative;
                    border-radius: 1px;
                    
                    background: linear-gradient(to right, var(--azulescuro), var(--azulclaro));
                    transition: width 0.3s;
                }

                .ProjetoCard:hover .name-prj::after{
                    width: 100%;
                }
            `}</style>
        </div>


        // <div className="gradient-bg">
        //     <div className="inside-bg">
        //         <div className="card-black">
        //             <div className="nav-card">
        //                 <div className="card-name">{infos.name}</div>
        //                 <div className="icons-card">
        //                     <img src={infos.icon1} alt="" />
        //                     <img src={infos.icon2} alt="" />
        //                     <img src={infos.icon3} alt="" />
        //                 </div>
        //             </div>
        //             <img className="img-card" src={infos.screen} alt="" />
        //             <div className="infos-card">
        //                 <p className="txt-card">{infos.description}</p>
        //                 <a href={infos.link} className="git-button"><img src="github-icon.png" alt=""/></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}