export default function CardComponent(props) {

    var fl, end
    if (props.name == 'Adapti') {
        fl = 'flex-col-reverse'
        end = 'items-end'
    } else {
        fl = 'flex-col'
        end = 'items-start'
    }

    return (
        <div className={`flex ${fl} relative -top-[161px] z-30 px-10`}>
            <div className="bg-black h-36 p-2 flex rounded-lg items-center">
                <div className="bg-gradient-to-br from-white to-gray w-28 h-28 grid items-center p-2 rounded-md relative -left-7">
                    <img src={props.logo} alt=""/>
                </div>
                <div className="text-sm text-white pr-2 max-w-sm">
                    <div className="font-bold">{props.name}</div>
                    <div>{props.description}</div>
                </div>
            </div>
            <div className="bg-white rounded-full h-3 w-3 mx-10 my-3">

            </div>
            <div className={`h-36 grid ${end}`}>
                <div className="bg-white px-3 py-1 rounded-lg w-fit">{props.time}</div>
            </div>
        </div>
    )
}