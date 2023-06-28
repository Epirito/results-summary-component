import { useState } from "preact/hooks";
export default function MobileMenu(
  { names, links, src }: {
    names: string[];
    src: string;
    links?: string[];
  },
) {
  const [open, setOpen] = useState(true);
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
          <div
            style={{
              width: 210,
              left: open ? 0 : -210,
              transition: "left 0.25s ease-in-out",
            }}
            class={`flex flex-col z-20 gap-6 ${
              open ? "p-6" : ""
            } fixed h-full bg-white md:hidden`}
          >
            {open
              ? (
                <>
                  <button
                    style={{ outline: "none" }}
                    onClick={() => {
                      setOpen(false);
                      return;
                    }}
                  >
                    <img src="/ecommerce/icon-close.svg" class="w-4" />
                  </button>
                  {names?.map((name, i) => <a href={links?.[i] ?? ""}>{name}
                  </a>)}
                </>
              )
              : null}
          </div>
        </div>
      </>
    </>
  );
}
