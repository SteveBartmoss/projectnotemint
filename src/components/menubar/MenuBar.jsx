import { useState } from "react";
import "./menubar.css";

export function MenuBar({elements=[]}) {

    const [collapse, setCollapse] = useState(false)
    const [elementChilds, setElementChilds] = useState([])

    const handleClickItem = (childs) => {
        setCollapse(!collapse)
        setElementChilds(childs)
    }


    return (
        <div className="main-div-menu">
            <div className="header-div">
                <ul>
                    {
                        elements.map((item,index) => 
                            <li key={index} onClick={() => handleClickItem(item.childs)} >{item.title}</li>
                        )
                    }
                </ul>
            </div>
            <div className={collapse ? 'list-div-open' : 'list-div-close'}>
                {
                    elementChilds.map((child,index) => 
                        <p>{child.title}</p>
                    )
                }
            </div>
        </div>
    )
}