import { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
export default function MobileMenu(
  { children, src, right }: {
    src: string;
    children: ComponentChildren;
    right?: boolean;
  },
) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        class={open ? "cursor-default" : ""}
        style={{ outline: "none" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <img class="h-4" src={src} />
      </button>
      <>
        <div
          class="w-screen h-screen top-0 left-0 z-20 fixed md:hidden"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${open ? 0.75 : 0})`,
            transition: "background-color 0.25s ease-in-out",
            pointerEvents: open ? "auto" : "none",
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
        </div>

        <div
          style={!right
            ? {
              width: 210,
              left: open ? 0 : -210,
              top: 0,
              transition: "left 0.25s ease-in-out",
            }
            : {
              width: 210,
              right: open ? 0 : -210,
              top: 0,
              transition: "right 0.25s ease-in-out",
            }}
          class={`flex flex-col z-20 gap-6 p-6 fixed h-screen bg-white md:hidden`}
        >
          <button
            style={{ outline: "none" }}
            onClick={() => {
              setOpen(false);
              return;
            }}
          >
            <img src="/ecommerce/icon-close.svg" class="w-4" />
          </button>
          {children}
        </div>
      </>
    </>
  );
}
