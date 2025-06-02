import "./panel.css";

export function Panel({type,children}){
    return(
        <div className={type}>
            {children}
        </div>
    )
}