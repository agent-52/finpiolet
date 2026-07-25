
export function Breaker({name}:{name:string}){
    return (
        <div className="flex">
            <div className="line"></div>
            <div>{name}</div>
            <div className="line"></div>
        </div>
    )
}