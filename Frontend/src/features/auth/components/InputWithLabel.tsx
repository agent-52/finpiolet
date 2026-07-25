
export function InputWithLabel({labelName, placeholder, name, type="text"}:{labelName:string, placeholder:string, name:string, type:string}){
    return(
        <div className="flex-col">
            <label htmlFor={name}>{labelName}</label>
            <input type={type} id={name} name={name} placeholder={placeholder}/>
        </div>
    )
}