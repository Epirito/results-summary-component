import { useState } from "preact/hooks";

import AddToCart from "../components/AddToCart.tsx";
import EcommerceNav from "../components/EcommerceNav.tsx";
import LightBox from "../components/LightBox.tsx";
import MobileLightBox from "../components/MobileLightBox.tsx";
import useLocalStorage from "../useLocalStorage.ts";
import MobileEcommerceNav from "../components/MobileEcommerceNav.tsx";

const images = [1, 2, 3, 4].map((n) => `/ecommerce/image-product-${n}.jpg`);

export default function Ecommerce() {
  const [cart, setCart] = useLocalStorage<{ id: number; quantity: number }[]>(
    "cart",
    [],
  );
  const [current, setCurrent] = useState(0);
  return (
    <div class="md:px-8 md:py-8 h-full flex flex-col">
      <EcommerceNav cart={cart} setCart={setCart} />
      <MobileEcommerceNav cart={cart} setCart={setCart} />
      <div class="md:h-full flex flex-col justify-center">
        <main class="flex flex-col md:flex-row md:mx-32 md:space-x-10 justify-center items-center">
          <LightBox
            current={current}
            setCurrent={setCurrent}
            images={images}
            thumbnails={[1, 2, 3, 4].map((n) =>
              `/ecommerce/image-product-${n}-thumbnail.jpg`
            )}
          />
          <MobileLightBox
            images={images}
            current={current}
            setCurrent={setCurrent}
          />
          <div
            style={{ color: "hsl(220, 13%, 13%)" }}
            class="flex-col my-10 w-3/4 md:w-80 box-content space-y-4"
          >
            <hgroup>
              <p class="font-semibold" style={{ color: "hsl(26, 100%, 55%)" }}>
                Sneaker Company
              </p>
              <h1 class="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
            </hgroup>
            <p style={{ color: "hsl(219, 9%, 45%)" }}>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div class="flex justify-between md:flex-col">
              <div class="space-x-2 flex items-center">
                <div class="font-bold text-2xl">$125.00</div>{" "}
                <div
                  class="rounded-md px-2 text-sm font-bold"
                  style={{
                    backgroundColor: "hsl(25, 100%, 94%)",
                    color: "hsl(26, 100%, 55%)",
                  }}
                >
                  50%
                </div>
              </div>
              <div>
                <s style={{ color: "hsl(220, 14%, 75%)" }}>$250.00</s>
              </div>
            </div>
            <AddToCart setCart={setCart} />
          </div>
        </main>
      </div>
    </div>
  );
}
