import { Head } from "$fresh/runtime.ts";

export default function ResultsSummaryComponent() {
  const data: [string, number, string][] = [
    ["reaction", 80, "red"],
    ["memory", 92, "yellow"],
    ["verbal", 61, "green"],
    ["visual", 72, "purple"],
  ];
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <link rel="stylesheet" href="/fonts/hanken.css" />
      </Head>
      <div
        class="flex h-screen"
        style={`@font-face {
    font-family: "Hanken Grotesk";
    src: url("/static/fonts/HankenGrotesk-VariableFont_wght.ttf");
`}
      >
        <div
          class="m-auto md:shadow-xl lg:shadow-2xl rounded-3xl md:flex lg:flex"
          style={{ fontFamily: "Hanken Grotesk, sans-serif", fontWeight: 600 }}
        >
          <section class=" p-8 rounded-3xl w-80 bg-gradient-to-t from-blue-800 via-indigo-700 to-indigo-700 flex-col items-center text-center text-white space-y-8">
            <h1 class="text-xl text-gray-400">Your Result</h1>
            <div class="rounded-full bg-gradient-to-b from-indigo-800 to-indigo-700 flex-col justify-center w-20 h-20 box-content p-10 m-auto">
              <div class="text-6xl">76</div>
              <div class="text-gray-400">of 100</div>
            </div>
            <div class="space-y-4">
              <h2 class="text-2xl">Great</h2>
              <p class="text-gray-400 text-md">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </section>
          <section class="p-8 w-80 space-y-8">
            <h1 class="text-lg">Summary</h1>
            <ul class="w-full space-y-4">
              {data.map(([name, score, color]) => (
                <li class={`p-3 bg-${color}-50 flex rounded-md`}>
                  <h2 class={`w-1/2 text-${color}-400 flex`}>
                    <img
                      class="text-black mr-3 w-5"
                      src={`/images/icon-${name}.svg`}
                      alt={`${name} icon`}
                    />
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </h2>
                  <div class="w-1/2 text-right text-gray-400">
                    <span class="text-black">{score}</span> / 100
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              class="transition ease-in-out bg-gray-600 hover:bg-gradient-to-t hover:from-blue-800 hover:to-indigo-700 text-white w-full py-3 rounded-full"
            >
              Continue
            </button>
          </section>
          {
            /*
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <p class="my-6">
            Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
            file, and refresh.
          </p>
          <Counter start={3} />
        */
          }
        </div>
        <div class="attribution bottom-0 fixed">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            class="text-blue-300"
          >
            Frontend Mentor
          </a>.
        </div>
      </div>
    </>
  );
}
