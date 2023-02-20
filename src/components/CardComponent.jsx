export default function CardComponent(props) {

    var fl, end, start
    if (props.name == 'Adapti') {
        fl = 'flex-col-reverse'
        end = 'items-end'
        start = 'items-start'
    } else {
        fl = 'flex-col'
        end = 'items-start'
        start = 'items-end'
    }

    return (
        <div className={`flex ${fl} relative -top-[209px] z-30 px-5 md:px-20`}>
            <div className="bg-black h-48 p-4 flex flex-col rounded-lg gap-2 items-start drop-shadow-xl relative md:-left-5 hover:-rotate-2 transition ease-in-out delay-50">
                <div className="flex w-full justify-between">
                    <div className="bg-gradient-to-br from-white to-gray w-14 h-14 grid items-center p-2 rounded-lg drop-shadow-xl">
                        <img src={props.logo} alt=""/>
                    </div>''
                    <div className="font-semibold text-lg text-white mx-5 my-2">{props.name}</div>
                </div>
                <div className="text-sm text-white pr-2 max-w-sm w-fit">
                    
                    <div className="text-justify">{props.description}</div>
                </div>
            </div>
            <div className="bg-white rounded-full h-3 w-3 mx-10 my-3 hidden md:block">

            </div>
            <div className={`h-48 ${end} hidden md:grid`}>
                <div className="bg-white px-3 py-1 rounded-lg w-fit">{props.time}</div>
            </div>
        </div>
    )
}