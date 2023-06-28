import Avatar from "../components/Avatar.tsx";
import BottomLineMenu from "../components/BottomLineMenu.tsx";
import Cart from "./Cart.tsx";

export default function EcommerceNav({cart,setCart}: {
    cart: {id: number, quantity: number}[], 
    setCart: (input: {id: number, quantity: number}[]|((c: {id: number, quantity: number}[])=>{id: number, quantity: number}[]))=>void
}) {
    return <nav class="hidden md:flex flex-row justify-between items-start border-b-1">
    <div class="flex items-start gap-16">
        <a href=""><img class="w-32" src="/ecommerce/logo.svg"/></a>
        <BottomLineMenu names={['Collections', 'Men', 'Women', 'About', 'Contact']}/>
    </div>
    <div class="flex items-center gap-6">
        <Cart cart={cart} setCart={setCart}/>
        <Avatar src={"/ecommerce/image-avatar.png"}/>
    </div> 
</nav>
}
