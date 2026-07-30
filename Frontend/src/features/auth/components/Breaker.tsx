import "../../../styles/auth.css"
export function Breaker({name}:{name:string}){
    return (
        <div className="flex cGrey1 items-center gap-1">
            <div className="line bgGrey1"></div>
            <div className="noWrap text-xs">{name}</div>
            <div className="line bgGrey1"></div>
        </div>
    )
}