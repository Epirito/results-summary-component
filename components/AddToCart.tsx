import { useState } from "preact/hooks"
import useLocalStorage from "../useLocalStorage.ts"

export default function AddToCart({setCart}: {setCart: (cb: (c: {id: number, quantity: number}[])=>{id: number, quantity: number}[])=>void}) {
    const [quantity, setQuantity] = useState(1)
    return (<div class="flex flex-col md:flex-row justify-between gap-3">
            <div class="flex justify-between rounded-md w-full md:w-2/5 px-4 py-2" style={{backgroundColor: 'hsl(223, 64%, 98%)'}}>
                <button 
                    style={{outline: 'none'}}
                    class="px-2 hover:opacity-60 transition-all ease-in-out duration-250" 
                    onClick={()=>{setQuantity(q=>Math.max(1,q-1))}}
                >
                    <img src="/ecommerce/icon-minus.svg" style={{filter: (quantity>1) ? '' : 'grayscale(1)'}}/>
                </button>
                <span>{quantity}</span>
                <button 
                    style={{outline: 'none'}} 
                    class="px-2 hover:opacity-60 transition-all ease-in-out duration-250" 
                    onClick={()=>{
                        setQuantity(q=>q+1)
                    }}
                >
                    <img src="/ecommerce/icon-plus.svg"/>
                </button>
            </div>
            <button
                class="flex items-center justify-center w-full md:w-3/5 py-2 gap-2 rounded-md text-white hover:opacity-60 transition-all ease-in-out duration-250" 
                style={{outline: 'none', backgroundColor: 'hsl(26, 100%, 55%)', boxShadow: '0px 10px 40px -10px hsl(26, 100%, 55%)'}}
                onClick={()=>{
                    setCart(c=>[...c, {id: 1, quantity}])
                }}>
                <img class="w-4" style={{filter: 'brightness(255)'}} src="/ecommerce/icon-cart.svg"/>
                <p class="text-sm">Add to cart</p>
            </button>
    </div>
    )
}