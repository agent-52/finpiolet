export const AnalyticsCardWrapper = ({title, description, children}:{title:string, description:string, children:React.ReactNode}) => {
    return (
        <div className="analyticsCardWrapper">
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}