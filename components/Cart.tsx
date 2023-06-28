import data from "../data.ts";
import EcommerceDropdown from "./EcommerceDropdown.tsx";
import NotificationCounter from "./NotificationCounter.tsx";

export default function Cart({cart,setCart}: {cart: { id: number; quantity: number; }[], setCart: (input: { id: number; quantity: number; }[] | ((c: { id: number; quantity: number; }[]) => { id: number; quantity: number; }[])) => void}) {
    return <EcommerceDropdown title={<NotificationCounter count={cart.length}>
      <img src="/ecommerce/icon-cart.svg" style={{ outline: 'none' }} />
    </NotificationCounter>}
      innerClassName="-right-10 w-72 flex justify-center items-center">
      <div class="flex flex-col">
        <div style={{ color: 'hsl(220, 13%, 13%)' }} class="py-4 px-2 w-64 border-b-1 font-semibold">Cart</div>
        {(cart.length === 0)
          ? <div class="h-24 flex justify-center items-center"><p class="font-semibold" style={{ color: 'hsl(219, 9%, 45%)' }}>Your cart is empty.</p></div>
          : <div class="overflow-y-auto min-h-24 max-h-64">
            {cart.map(({ id, quantity }, i) => <div class="flex p-1 gap-2 items-center">
              <img class="h-8" src={data[id].src} />
              <div class="flex flex-col items-start">
                <div class="text-sm">{data[id].title}</div> <div>{`$${data[id].price} x ${quantity}`} <span class="font-bold">{`$${data[id].price * quantity}`}</span></div>
              </div>
              <button style={{ outline: 'none' }} onClick={() => { setCart(oldCart => oldCart.filter((_, j) => j !== i)); } }><img class="h-4" src="/ecommerce/icon-delete.svg" /></button>
            </div>)}
          </div>}
  
        {cart.length === 0 ? null : <button onClick={() => { setCart([]); } } style={{ backgroundColor: 'hsl(26, 100%, 55%)' }} class="flex justify-center items-center text-white py-2 mt-2 rounded-md hover:opacity-60 transition-all ease-in-out duration-250">Checkout</button>}
      </div>
    </EcommerceDropdown>;
  }
  