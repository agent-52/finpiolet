
export function Button({backImg, frontImg, name, onClickFn, disable}:{backImg?:string, name:string, frontImg?:string, onClickFn?:(event:React.MouseEvent<HTMLButtonElement>) => void , disable?:boolean}){
    return(
        <button className="flex btn-1 gap-1" onClick={onClickFn} disabled={disable}>
            {backImg?<div></div>:null}
            <div>{name}</div>
            {frontImg?<div></div>:null}
        </button>
    )
}