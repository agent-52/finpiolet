

export function Button({backImg, frontImg, name, onClickFn, disable, className}:{backImg?:React.ReactNode, name:string, frontImg?:React.ReactNode, onClickFn?:(event:React.MouseEvent<HTMLButtonElement>) => void , disable?:boolean, className:string}){
    return(
        <button className={className} onClick={onClickFn} disabled={disable}>
            {backImg?<div>{backImg}</div>:null}
            <div>{name}</div>
            {frontImg?<div>{frontImg}</div>:null}
        </button>
    )
}