import {useState} from "preact/hooks"
import { ComponentChildren, ComponentChild } from "preact";

/*
title is the text that appears on the button
children are the dropdown items 
 */
export default function Dropdown({title, innerClassName, children}: {title: string|ComponentChild, innerClassName?:string, children: ComponentChildren}) {
    const [hover, setHover] = useState(false)
    const setTrue = ()=>{setHover(true)}
    const setFalse = ()=>{setHover(false)}
    return (
        <div className="relative" onMouseLeave={setFalse}>
            <button 
                className={`${innerClassName} cursor-default flex items-center gap-1 font-semibold ${hover ? "text-black" : "text-gray-500"}`} 
                onFocus={setTrue} 
                onBlur={setFalse} 
                onMouseEnter={setTrue}>{title} 
                <img className="w-2" src={`/intro-dropdown/icon-arrow-${hover ? "up" : "down"}.svg`}/></button>
            <div className={`absolute bg-white shadow-xl p-4 rounded-xl ${hover ? "" : "hidden"} ${innerClassName}`}>
                {children}
            </div>
        </div>
    )
}