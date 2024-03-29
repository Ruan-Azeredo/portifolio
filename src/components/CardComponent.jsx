export default function CardComponent(props) {

    const infos = props.infos

    var fl, end, start, link
    if (infos.name == 'Adapti') {
        fl = 'flex-col-reverse'
        end = 'items-end'
        start = 'items-start'
    } else {
        fl = 'flex-col'
        end = 'items-start'
        start = 'items-end'
    }

    return (
        <div className={`flex ${fl} relative -top-[100px] md:-top-[209px] z-30 px-5 md:px-20`}>
            <a href={infos.link}>
                <div className="bg-black border-grayy border-2 h-fit md:h-48 p-4 flex flex-col rounded-lg gap-2 items-start drop-shadow-xl relative md:-left-5 hover:-rotate-2 transition ease-in-out delay-50">
                    <div className="flex w-full justify-between">
                        <div className="bg-gradient-to-br from-white to-grayy w-14 h-14 grid items-center p-2 rounded-lg drop-shadow-xl">
                            <img src={`gen/${infos.logo}`} alt=""/>
                        </div>
                        <div className="font-semibold text-lg text-white mx-5 my-2">{infos.name}</div>
                    </div>
                    <div className="text-sm text-white pr-2 max-w-sm w-fit">
                
                        <div className="text-justify">{infos.description}</div>
                    </div>
                </div>
            </a>
            <div className="bg-white rounded-full h-3 w-3 mx-10 my-3 hidden md:block">

            </div>
            <div className={`h-fit md:h-48 ${end} hidden md:grid`}>
                <div className="bg-white font-medium px-3 py-1 rounded-lg w-fit">{infos.time}</div>
            </div>
        </div>
    )
}