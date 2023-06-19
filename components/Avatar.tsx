import { useState } from "preact/hooks"

export default function Avatar({src}: {src: string}) {
    const [hover, setHover] = useState(false)
    return <button 
        onMouseEnter={()=>{setHover(true)}} 
        onMouseLeave={()=>{setHover(false)}} 
        class="w-11 h-11 flex justify-center items-center" 
        >
            <div style={{outline: 'none', backgroundColor: 'hsl(26, 100%, 55%)'}} class="flex justify-center items-center transition-all ease-in-out duration-250 rounded-full w-10 h-10 hover:(w-11 h-11)"><img class="w-10" src={src}/></div>
        </button>
}