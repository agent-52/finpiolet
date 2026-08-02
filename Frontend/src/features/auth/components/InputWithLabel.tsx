import "../../../styles/auth.css"
export function InputWithLabel({labelName, placeholder, name, type="text", onChangeFn, value}:{labelName:string, placeholder:string, name:string, type:string, onChangeFn:(event:React.ChangeEvent<HTMLInputElement>)=> void , value?:any}){
    return(
        <div className="flex-col">
            <label htmlFor={name}>{labelName}</label>
            <input className="borderT1 bgW input-field" value={value} type={type} id={name} name={name} placeholder={placeholder} onChange={onChangeFn}/>
        </div>
    )
}