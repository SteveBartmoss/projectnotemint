import { useState } from "react"
import "./codespace.css";

export function CodeSpaceV1(){

    const [content,setContent] = useState([""])
    const [row, setRow] = useState(0)
    const [colum, setColum] = useState(0)


    const handleKeyDown = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto
        
        const key = event.key;

        console.log(key)

        if(key === "ArrowUp"){
            setRow(prev => Math.max(0, prev - 1 ))
            setColum(prev => Math.min(prev, content[Math.max(0, row -1 )]?.length || 0))
        } else if(key === "ArrowDown"){
            setRow(prev => Math.min(content.length -1, prev +1))
            setColum(prev => Math.min(prev, content[Math.min(content.length -1, row + 1)]?.length || 0))
        } else if(key === "ArrowLeft"){
            if(colum > 0){
                setColum(prev => prev -1)
            } else if(row > 0){
                setRow(prev => - 1)
                setColum(content[row -1]?.length || 0)
            }
        } else if(key === "ArrowRight"){
            if(colum < content[row].length){
                setColum(prev => prev + 1)
            } else if(row < content.length -1 ){
                setRow(prev => prev + 1)
                setColum(0)
            }
        }
        
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
        <div className="div-code"  tabIndex={0} onKeyDown={handleKeyDown} style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
            {content.map((item, index) => (
                <div key={index} style={{ position: 'relative' }}>
                    {item}
                    {index === row && (
                        <span style={{ position: 'absolute', left: `${colum * 0.6}em`, borderLeft: "2px solid grey", height: '1.2em', }}>
                            {/* Cursor */}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}