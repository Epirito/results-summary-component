import DropdownNavigation from "../components/DropdownNavigation.tsx";
import MobileMenu from "../components/MobileMenu.tsx";
import LoginOrRegister from "../components/LoginRegister.tsx";

export default function IntroSectionWithDropdownNavigationIsland() {
  return (
    <div class="p-4 box-content">
      <div class="hidden sm:block">
        <nav class="invisible sm:visible flex sm:flex-row items-center justify-between">
          <div class="flex space-x-6">
            <a href="">
              <img class="w-20" src="/intro-dropdown/logo.svg" />
            </a>
            <DropdownNavigation />
          </div>
          <LoginOrRegister />
        </nav>
      </div>

      <div class="sm:hidden">
        <nav class="top-0 visible sm:invisible flex items-center">
          <div class="w-1/2 flex items-center">
            <button>
              <img src="/intro-dropdown/logo.svg" />
            </button>
          </div>
          <div class="w-1/2 flex justify-right items-center py-4">
            <MobileMenu src="/intro-dropdown/icon-menu.svg" right={true}>
              <DropdownNavigation vertical={true} />
              <LoginOrRegister vertical={true} />
            </MobileMenu>
          </div>
        </nav>
      </div>
      <main class="sm:my-12 sm:max-w-4xl sm:mx-auto sm:justify-between space-y-8 flex flex-col sm:flex-row">
        <img
          class="sm:hidden object-scale-down"
          src="/intro-dropdown/image-hero-mobile.png"
        />
        <div
          class={"text-center sm:text-left flex flex-col justify-between h-64" + /*sm:h-auto*/
            "sm:pt-10"}
        >
          <div class="flex flex-col justify-between h-52 sm:h-80">
            <h1 class="font-bold text-3xl sm:text-6xl">Make remote work</h1>
            <p class="text-lg font-semibold text-gray-400 sm:w-72">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <div>
              <a
                href=""
                class="rounded-lg bg-black text-white hover:bg-white hover:text-black border-1 border-black px-4 py-2"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="flex justify-center sm:justify-left space-x-8 sm:w-full my-5">
            <img class="max-h-4" src="/intro-dropdown/client-databiz.svg" />
            <img
              class="max-h-4"
              src="/intro-dropdown/client-audiophile.svg"
            />
            <img class="max-h-4" src="/intro-dropdown/client-meet.svg" />
            <img class="max-h-4" src="/intro-dropdown/client-maker.svg" />
          </div>
        </div>

        {/* show only on desktop */}
        <img
          class="hidden sm:block object-scale-down w-80"
          src="/intro-dropdown/image-hero-desktop.png"
        />
      </main>
    </div>
  );
}
