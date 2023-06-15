import { useRef, useState } from "preact/hooks"
import {tw} from "twind"
import {css} from "twind/css"
import ImgButton from "../components/ImgButton.tsx"


function Menu({thumbnails, current, setCurrent, hovering, setHovering}: {thumbnails: string[], current: number, hovering: number|null, setHovering: (i: number|null)=>void, setCurrent: (i: number)=>void}) {
    return <div class="flex justify-between rounded-lg h-min">
    {thumbnails.map((img, i) => <button
        style={{
            outline: "solid 2px",
            outlineColor: (current===i) ? 'hsl(26, 100%, 55%)' : 'transparent',
        }}
        class={"rounded-lg w-16"}
        onMouseEnter={()=>{setHovering(i)}}
        onMouseLeave={()=>{setHovering(null)}}
        onClick={()=>{setCurrent(i)}}>
            <div class="bg-white rounded-lg w-16"><img class={`rounded-lg transition-opacity ease-in-out duration-250 w-16 opacity-${(current===i) ? 25 : (hovering===i) ? 50 : 100}`} src={img}/></div>
        </button>)}
</div>
}

export default function LightBox({images, thumbnails}: {images: string[], thumbnails: string[]}) {
    const [current, setCurrent] = useState(0)
    const dialogRef = useRef(null as HTMLDialogElement | null)
    const [full, setFull] = useState(false)
    const [hovering, setHovering] = useState(null as number | null)
    const backdrop = css({
        '&::backdrop': {
            background: 'rgba(0, 0, 0, .75)'
        }
    })
    return <div class="flex flex-col gap-3 w-80">
        <button style={{outline: 'none'}} class="rounded-lg" onClick={()=>{dialogRef.current!.showModal()}}><img class="rounded-lg transition-opacity ease-in-out duration-250 hover:opacity-50" src={images[hovering ?? current]}/></button>
        <Menu thumbnails={thumbnails} current={current} setCurrent={setCurrent} hovering={hovering} setHovering={setHovering}/>
    <dialog ref={dialogRef} class={tw`bg-transparent overflow-hidden fixed ${backdrop}`}>
        <div class="flex flex-col h-screen justify-start items-center">
            <div class="flex justify-end w-2/5 mb-5">
                <ImgButton imgClass="w-5" src={`/ecommerce/icon-close.svg`} hoverSrc={`/ecommerce/icon-close-hover.svg`} onClick={()=>{dialogRef.current!.close()}}>

                </ImgButton>
            </div>
            <div class="flex items-center justify-center">
                <ImgButton 
                    style={{outline:'none', marginRight: -10}} 
                    class={tw`w-10 h-10 z-10 rounded-full bg-white flex justify-center items-center`}
                    onClick={()=>{setCurrent(c=>(c-1+images.length) % images.length)}}
                    imgClass="w-2 h-3"
                    src="/ecommerce/icon-previous.svg"
                    hoverSrc="/ecommerce/icon-previous-hover.svg"
                />
                <img class="rounded-lg w-2/5" src={images[hovering ?? current]}/>
                <ImgButton 
                    style={{outline:'none', marginLeft: -10}} 
                    class="w-10 h-10 z-10 rounded-full bg-white flex justify-center items-center"
                    onClick={()=>{setCurrent(c=>(c+1) % images.length)}}
                    imgClass="w-2 h-3"
                    src="/ecommerce/icon-next.svg"
                    hoverSrc="/ecommerce/icon-next-hover.svg"
                />
            </div>
            <div class="w-1/3 mt-12">
                <Menu thumbnails={thumbnails} current={current} setCurrent={setCurrent} hovering={hovering} setHovering={setHovering}/>
            </div>
        </div>
    </dialog>
    </div>
}