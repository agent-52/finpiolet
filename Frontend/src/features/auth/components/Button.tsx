
export function Button({backImg, frontImg, name}:{backImg?:string, name:string, frontImg?:string}){
    return(
        <div className="flex btn-1 gap-1">
            {backImg?<div></div>:null}
            <div>{name}</div>
            {frontImg?<div></div>:null}
        </div>
    )
}