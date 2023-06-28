import ImgButton from "./ImgButton.tsx"
import {tw} from "twind"
export default function MobileLightBox({images, current, setCurrent}: {images: string[], current: number, setCurrent: (cb: (old:number)=>number)=>void}) {
    return <div class="md:hidden flex items-center justify-center">
        <ImgButton
            style={{outline:'none', marginRight: -50}} 
            class={tw`w-10 h-10 z-10 rounded-full bg-white flex justify-center items-center`}
            onClick={()=>{setCurrent(c=>(c-1+images.length) % images.length)}}
            imgClass="w-2 h-3"
            src="/ecommerce/icon-previous.svg"
            hoverSrc="/ecommerce/icon-previous-hover.svg"
        />
        <img src={images[current]}/>
        <ImgButton 
            style={{outline:'none', marginLeft: -50}} 
            class="w-10 h-10 z-10 rounded-full bg-white flex justify-center items-center"
            onClick={()=>{setCurrent(c=>(c+1) % images.length)}}
            imgClass="w-2 h-3"
            src="/ecommerce/icon-next.svg"
            hoverSrc="/ecommerce/icon-next-hover.svg"
        />
    </div>
}
