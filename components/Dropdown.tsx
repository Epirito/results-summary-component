import {useState} from "preact/hooks"
import { ComponentChildren } from "preact";

/*
title is the text that appears on the button
children are the dropdown items 
 */
export default function Dropdown({title, children}: {title: string, children: ComponentChildren}) {
    const [hover, setHover] = useState(false)
    const setTrue = ()=>{setHover(true)}
    const setFalse = ()=>{setHover(false)}
    return (
        <div class="relative" onMouseLeave={setFalse}>
            <button class={`flex items-center gap-1 font-semibold ${hover ? "text-black" : "text-gray-500"}`} onfocusin={setTrue} onfocusout={setFalse} onMouseEnter={setTrue}>{title} <img src={`/intro-dropdown/icon-arrow-${hover ? "up" : "down"}.svg`}/></button>
            <div class={`absolute bg-white shadow-xl p-4 rounded-xl ${hover ? "" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}