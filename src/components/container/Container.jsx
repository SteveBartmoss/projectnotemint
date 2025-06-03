

export function Container({children,config}){

    return(
        <div style={config}>
            {children}
        </div>
    )
}