import { useState } from "react"
import "./codespace.css";

export function CodeSpaceV1(){

    const [content,setContent] = useState([""])
    const [row, setRow] = useState(0)
    const [colum, setColum] = useState(0)


    const handleKeyDown = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto
        
        const key = event.key;
        
        // Manejo especial para Enter
        if (key === "Enter") {
            setContent(prev => {
                const newContent = [...prev];
                // Divide la línea actual en dos partes
                const left = newContent[row].slice(0, colum);
                const right = newContent[row].slice(colum);
                newContent[row] = left;
                newContent.splice(row + 1, 0, right);
                return newContent;
            });
            setRow(prev => prev + 1);
            setColum(0);
            return;
        }

        // Manejo para Backspace
        if (key === "Backspace") {
            if (colum > 0) {
                setContent(prev => {
                    const newContent = [...prev];
                    newContent[row] = newContent[row].slice(0, colum - 1) + newContent[row].slice(colum);
                    return newContent;
                });
                setColum(prev => prev - 1);
            } else if (row > 0) {
                setContent(prev => {
                    const newContent = [...prev];
                    const prevLineLength = newContent[row - 1].length;
                    newContent[row - 1] += newContent[row];
                    newContent.splice(row, 1);
                    return newContent;
                });
                setRow(prev => prev - 1);
                setColum(prevLineLength);
            }
            return;
        }

        // Para caracteres normales
        if (key.length === 1) {
            setContent(prev => {
                const newContent = [...prev];
                newContent[row] = newContent[row].slice(0, colum) + key + newContent[row].slice(colum);
                return newContent;
            });
            setColum(prev => prev + 1);
        }
        
    };


    return(
        <div className="div-code"  tabIndex={0} onKeyDown={handleKeyDown} style={{ fontFamily: "monospace", whiteSpace: "pre" }}
        >
            {content.map((item, index) => (
                <div key={index}>
                    {item}
                    {index === row && (
                        <span style={{ borderLeft: "2px solid grey", marginLeft: "-2px" }}>
                            {/* Cursor */}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}