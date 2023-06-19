

import AddToCart from "../islands/AddToCart.tsx";
import LightBox from "../islands/LightBox.tsx";
import EcommerceNav from "../islands/EcommerceNav.tsx";

export default function EcommerceProductPage() {
    return (
        <div class="h-screen box-content">
            <div class="px-8 py-8 h-full flex flex-col">
                <EcommerceNav/>
                <div class="h-full flex flex-col justify-center">
                    <main class="flex mx-32 space-x-10 justify-center">
                        <LightBox images={[1,2,3,4].map(n=>`/ecommerce/image-product-${n}.jpg`)} thumbnails={[1,2,3,4].map(n=>`/ecommerce/image-product-${n}-thumbnail.jpg`)}/>
                        <div class="flex-col my-10 w-80 box-content space-y-4">
                            <hgroup>
                                <p class="font-semibold" style={{color: 'hsl(26, 100%, 55%)'}}>Sneaker Company</p>
                                <h1 class="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
                            </hgroup>
                            <p>
                                These low-profile sneakers are your perfect casual wear
                                companion. Featuring a durable rubber outer sole, they'll
                                withstand everything the weather can offer.
                            </p>
                            <div>
                                <div class="space-x-2 flex items-center">
                                    <div class="font-bold text-2xl">$125.00</div> <div class="rounded-md px-2 text-sm font-bold" style={{backgroundColor: 'hsl(25, 100%, 94%)', color: 'hsl(26, 100%, 55%)'}}>50%</div>
                                </div>
                                <div>
                                    <s style={{color: 'hsl(220, 14%, 75%)'}}>$250.00</s>
                                </div>
                            </div>
                            <AddToCart/>
                        </div>
                    </main>
                </div>
                   </div>
        </div>
    )
}