import Dropdown from "../components/Dropdown.tsx";

export default function DropdownNavigation(
  { vertical }: { vertical?: boolean },
) {
  return (
    <div
      class={`flex ${
        vertical ? "flex-col space-y-4" : "space-x-4"
      } items-start`}
    >
      <Dropdown
        title="Features"
        undetached={vertical}
      >
        <button class="grid grid-cols-5 gap-2 w-28 h-32 place-items-center text-gray-500 font-semibold">
          <img class=" w-4" src="/intro-dropdown/icon-todo.svg" />
          <h1 class="whitespace-nowrap col-span-4 w-full text-left">
            Todo List
          </h1>
          <img class=" w-4" src="/intro-dropdown/icon-calendar.svg" />
          <h1 class=" col-span-4 w-full text-left">Calendar</h1>
          <img class=" w-4" src="/intro-dropdown/icon-reminders.svg" />
          <h1 class=" col-span-4 w-full text-left">Reminders</h1>
          <img class=" w-4" src="/intro-dropdown/icon-planning.svg" />
          <h1 class=" col-span-4 w-full text-left">Planning</h1>
        </button>
      </Dropdown>
      <Dropdown title="Company" undetached={vertical}>
        <div class={"flex flex-col gap-22 items-start"}>
          <button class="text-gray-500 font-semibold">History</button>
          <button class="text-gray-500 font-semibold whitespace-nowrap">
            Our Team
          </button>
          <button class="text-gray-500 font-semibold">Blog</button>
        </div>
      </Dropdown>
      <a href="" class="font-semibold text-gray-500 hover:text-black">
        Careers
      </a>
      <a href="" class="font-semibold text-gray-500 hover:text-black">About</a>
    </div>
  );
}
