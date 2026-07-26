
export function InputWithLabel({labelName, placeholder, name, type="text", onChangeFn}:{labelName:string, placeholder:string, name:string, type:string, onChangeFn:(event:React.ChangeEvent<HTMLInputElement>)=> void}){
    return(
        <div className="flex-col">
            <label htmlFor={name}>{labelName}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} onChange={onChangeFn}/>
        </div>
    )
}