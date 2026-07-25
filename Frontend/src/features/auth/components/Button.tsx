
export function Button({img, name}:{img?:string, name:string}){
    return(
        <div className="flex btn-1 gap-1">
            {img?<div></div>:null}
            <div>{name}</div>
        </div>
    )
}