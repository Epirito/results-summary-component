import Avatar from "../components/Avatar.tsx";
import BottomLineMenu from "../components/BottomLineMenu.tsx";
import EcommerceDropdown from "../components/EcommerceDropdown.tsx";
import NotificationCounter from "../components/NotificationCounter.tsx";
import useLocalStorage from "../useLocalStorage.ts";
const data = {1: {src: '/ecommerce/image-product-1-thumbnail.jpg', title: 'Fall Limited Edition Sneakers', price: 125}} as Record<number, {src: string, title: string, price:number}>
export default function EcommerceNav() {
    const [cart, setCart] = useLocalStorage('cart', [] as {id: number, quantity: number}[])
    return <nav class="flex justify-between items-start border-b-1">
    <div class="flex items-start gap-16">
        <a href=""><img class="w-32" src="/ecommerce/logo.svg"/></a>
        <BottomLineMenu names={['Collections', 'Men', 'Women', 'About', 'Contact']}/>
    </div>
    <div class="flex items-center gap-6">
        <EcommerceDropdown title={<NotificationCounter count={cart.length}>
                <img src="/ecommerce/icon-cart.svg" style={{outline: 'none'}}/>
            </NotificationCounter>} 
            innerClassName="-right-10 w-72 flex justify-center items-center">
            <div class="flex flex-col">
                <div class="py-4 px-2 w-64 border-b-1 font-semibold">Cart</div>
                    {(cart.length===0) 
                        ? <div class="h-24 flex justify-center items-center"><p class="font-semibold" style={{color: 'hsl(219, 9%, 45%)'}}>Your cart is empty.</p></div> 
                        : <div class="overflow-y-auto min-h-24 max-h-64">
                            {cart.map(({id, quantity}, i)=><div class="flex p-1 gap-2 items-center">
                                <img class="h-8" src={data[id].src}/>
                                <div class="flex flex-col items-start">
                                    <div class="text-sm">{data[id].title}</div> <div>{`$${data[id].price} x ${quantity}`} <span class="font-bold">{`$${data[id].price * quantity}`}</span></div>
                                </div>
                                <a href="" style={{outline: 'none'}} onClick={()=>{setCart(oldCart=>oldCart.filter((_,j)=>j!==i))}}><img class="h-4" src="/ecommerce/icon-delete.svg"/></a>
                            </div>)}
                        </div>}
                
                {cart.length===0 ? null : <a href="" onClick={()=>{setCart([])}} style={{backgroundColor: 'hsl(26, 100%, 55%)'}} class="flex justify-center items-center text-white py-2 mt-2 rounded-md">Checkout</a>}
            </div>
        </EcommerceDropdown>
        <Avatar src={"/ecommerce/image-avatar.png"}/>
    </div> 
</nav>
}