import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="m-4">
        <h1 class="font-semibold"> Frontend Mentor </h1>
        <p> These are the subset of my Frontend Mentor solutions which were made with Deno Fresh </p>
        <p> Should probably make this page more pretty lmao</p>
        <ul class="text-blue-700">
          <li><a href="/intro-section-with-dropdown-navigation">Intro Section with Dropdown Navigation</a></li>
          <li><a href="/results-summary-component">Results Summary Component</a></li>
          <li><a href="/ecommerce-product-page">E-commerce Product Page</a></li>
        </ul>
      </div>
    </>
  );
}
