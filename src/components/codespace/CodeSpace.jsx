import { useState } from "react"
import "./codespace.css";

export function CodeSpaceV1(){

    const [content,setContent] = useState('')

    const handleKeyDown = (event) => {
        setContent(content+event.key)
    }


    return(
        <div className="div-code" tabIndex={0} onKeyDown={handleKeyDown}>
            {content}
        </div>
    )
}