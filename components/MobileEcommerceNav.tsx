import Avatar from "./Avatar.tsx";
import Cart from "./Cart.tsx";
import MobileMenu from "./MobileMenu.tsx";

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
        <MobileMenu src="/ecommerce/icon-menu.svg" right={true}>
          {["Collections", "Men", "Women", "About", "Contact"].map((
            name,
          ) => <a href={""}>{name}</a>)}
        </MobileMenu>
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
