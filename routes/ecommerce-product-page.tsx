import Ecommerce from "../islands/Ecommerce.tsx";
import {Head} from "$fresh/runtime.ts"
export default function EcommerceProductPage() {
    return (
        <div class="h-screen box-content"
        >
            {<Head>
                <link rel="stylesheet" href="/fonts/kumbh.css"/>
        </Head> }
            <Ecommerce/>
        </div>
    )
}