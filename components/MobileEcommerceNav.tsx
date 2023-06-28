import Avatar from "./Avatar.tsx";
import Cart from "./Cart.tsx";

export default function MobileEcommerceNav({
  cart,
  setCart,
}: {
  cart: { id: number; quantity: number }[];
  setCart: (
    input:
      | { id: number; quantity: number }[]
      | ((
        c: { id: number; quantity: number }[],
      ) => { id: number; quantity: number }[]),
  ) => void;
}) {
  return (
    <nav class="p-3 flex justify-between items-center md:hidden">
      <div class="flex items-center gap-6">
        <button style={{ outline: "none" }}>
          <img class="h-4" src="/ecommerce/icon-menu.svg" />
        </button>
        <a href="">
          <img class="w-32" src="/ecommerce/logo.svg" />
        </a>
      </div>
      <div class="flex items-center gap-6">
        <Cart cart={cart} setCart={setCart} />
        <Avatar src={"/ecommerce/image-avatar.png"} />
      </div>
    </nav>
  );
}
