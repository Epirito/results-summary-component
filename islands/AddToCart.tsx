import { useState } from "preact/hooks"
import useLocalStorage from "../useLocalStorage.ts"

export default function AddToCart() {
    //const [getQuantity, setQuantity] = useLocalStorage('quantity')
    const [quantity, setQuantity] = useState(1)
    return (<div class="flex justify-between gap-3">
            <div class="flex justify-between rounded-md w-2/5 px-4 py-2" style={{backgroundColor: 'hsl(223, 64%, 98%)'}}>
                <button style={{outline: 'none'}}class="px-2" onClick={()=>{setQuantity(q=>Math.max(0,q-1))}}>
                    <img src="/ecommerce/icon-minus.svg" style={{filter: (quantity>0) ? '' : 'grayscale(1)'}}/>
                </button>
                <span>{quantity}</span>
                <button style={{outline: 'none'}} class="px-2" onClick={()=>{setQuantity(q=>Math.max(q+1))}}><img src="/ecommerce/icon-plus.svg"/></button>
            </div>
            <button class="flex items-center justify-center w-3/5 py-2 gap-2 rounded-md text-white" style={{outline: 'none', backgroundColor: 'hsl(26, 100%, 55%)'}}>
                <img style={{filter: 'brightness(255)'}} src="/ecommerce/icon-cart.svg"/>
                <p class="text-sm">Add to cart</p>
            </button>
    </div>
    )
}