import type React from "react"

export const Card1 = ({title, titleValue, icon, description, comparisonStatement}:{title:string, titleValue:string, icon:React.ReactNode, description:string, comparisonStatement?:string}) =>{
    return (
        <div>
            <div>
                <p>{title}</p>
                <div>{icon}</div>
            </div>
            <div>
                <div>
                    <h1>{titleValue}</h1>
                    <p>{description}</p>
                </div>
                <div>{comparisonStatement}</div>
            </div>

        </div>
    )
}