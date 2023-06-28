
import { ComponentChild, ComponentChildren } from "preact"
import {useEffect, useRef, useState} from "preact/hooks"


const b = (update: ()=>void)=>{
    let myUpdate = update;
    let timeout = undefined as number|undefined;
    return ({
        setUpdate: (update: ()=>void)=>{myUpdate = update},
        trigger: ()=>{
            clearTimeout(timeout)
            timeout = setTimeout(()=>myUpdate(), 500)
        },
        abort: ()=>{clearTimeout(timeout)}
    })
}
export default function EcommerceDropdown({title, innerClassName, children}: {title: string|ComponentChild, innerClassName?:string, children: ComponentChildren}) {
    const [hover, setHover] = useState(false)
    const [delayed, setDelayed] = useState(false)
    const myB = useRef(b(()=>{setDelayed(false)}))
    useEffect(()=>{
        myB.current.setUpdate(()=>{setDelayed(false)})
    }, [setDelayed])
    const setTrue = ()=>{
        setHover(true)
        setDelayed(true)
        myB.current.abort()
    }
    const setFalse = ()=>{
        setHover(false)
        myB.current.trigger()
    }
    return (
        <div className="relative" onMouseLeave={setFalse}>
            <button
                style={{outline: 'none'}}
                className={`cursor-default flex items-center gap-1 font-semibold ${delayed ? "text-black" : "text-gray-500"}`}
                onFocus={setTrue} 
                onBlur={setFalse} 
                onMouseEnter={setTrue}>{title}
                </button>
            <div onMouseEnter={setTrue} className={`absolute bg-white shadow-xl p-4 top-12 rounded-lg ${delayed ? "" : "hidden"} ${innerClassName}`}>
                {children}
            </div>
        </div>
    )
}
