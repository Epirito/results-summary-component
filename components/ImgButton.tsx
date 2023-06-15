import { useState } from "preact/hooks"
import {JSX} from "preact"
export default function ImgButton(props: JSX.HTMLAttributes<HTMLButtonElement>&{src: string, hoverSrc: string, imgClass: string}) {
    const {src, hoverSrc, imgClass} = props
    const [hovering, setHovering] = useState(false)
    return <button {...props} style={props.style??{outline: 'none'}} onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}}>
        <img src={hovering ? hoverSrc : src} class={imgClass}/>
    </button>
}