export default function LoginRegister({ vertical }: { vertical?: boolean }) {
  return (
    <div
      class={`flex ${vertical ? "flex-col items-center gap-2" : "space-x-4"}`}
    >
      <a
        href=""
        class="text-gray-500 py-1 font-semibold hover:text-black"
      >
        Login
      </a>
      <a
        href=""
        class={`border-1 py-1 ${
          vertical ? "w-full" : "px-4"
        } rounded-xl text-gray-500 flex justify-center font-semibold hover:text-black border-gray-500 hover:border-black`}
      >
        <div>Register</div>
      </a>
    </div>
  );
}
