import { useState } from "react";
import "./menubar.css";

export function MenuBar() {

    const [collapse, setCollapse] = useState(false)


    return (
        <div className="main-div-menu">
            <div className="header-div">
                <ul>
                    <li onClick={() => setCollapse(!collapse) }>File</li>
                    <li>Edit</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className={collapse ? 'list-div-open' : 'list-div-close'}>
                <p>
                    Prueba
                </p>
            </div>
        </div>
    )
}