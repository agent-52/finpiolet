
export const Card1 = ({heading, mainValue, img1Link, desc1, desc2}:{heading:string, mainValue:string, img1Link:string, desc2:string, desc1:string }) => {
    return (
        <div className="transCardType1">
            <div className="gap-1">
                <div className="flex">
                    <div>{heading}</div>
                    <div><img src={img1Link} alt="" /></div>
                </div>
                <h1>{mainValue}</h1>
            </div>
            
            <div>
                <div>{desc1}</div>
                <div><img src="" alt="" /></div>
            </div>
            <div>{desc2}</div>
        </div>
    )
}