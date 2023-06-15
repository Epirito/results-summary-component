import {useState} from "preact/hooks"
export default function BottomLineMenu({names, links}: {names: string[], links?: string[]}) {
    const [hover, setHover] = useState(null as number|null);
    return <div class="flex items-start gap-4">
        {names?.map((name, i) => {
            return <div class="flex flex-col justify-between hover:cursor-pointer h-16" onMouseEnter={()=>{
                setHover(i)
            }} onMouseLeave={()=>{setHover(null)}}>
                <a style={{color: (hover===i) ? "hsl(220, 13%, 13%)" : 'hsl(219, 9%, 45%)'}} href={links?.[i] ?? ''}>
                    {name}
                </a>
                <div class={`w-full`} style={{
                    backgroundColor: 'hsl(26, 100%, 55%)',
                    opacity: 1, //(hover===i) ? 1 : 0,
                    height: (hover===i) ? 5 : 0,
                    transition: 'height 0.1s ease-in-out'
                }}/>
            </div>
        })}
    </div>
}