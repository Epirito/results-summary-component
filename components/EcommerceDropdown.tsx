import { ComponentChild, ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import delayer from "../delayer.ts";

export default function EcommerceDropdown(
  { title, innerClassName, children }: {
    title: string | ComponentChild;
    innerClassName?: string;
    children: ComponentChildren;
  },
) {
  const [hover, setHover] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const myDelayer = useRef(delayer(() => {
    setDelayed(false);
  }));
  useEffect(() => {
    myDelayer.current.setUpdate(() => {
      setDelayed(false);
    });
  }, [setDelayed]);
  const setTrue = () => {
    setHover(true);
    setDelayed(true);
    myDelayer.current.abort();
  };
  const setFalse = () => {
    setHover(false);
    myDelayer.current.trigger();
  };
  return (
    <div className="relative" onMouseLeave={setFalse}>
      <button
        style={{ outline: "none" }}
        className={`cursor-default flex items-center gap-1 font-semibold ${
          delayed ? "text-black" : "text-gray-500"
        }`}
        onFocus={setTrue}
        onBlur={setFalse}
        onMouseEnter={setTrue}
      >
        {title}
      </button>
      <div
        onMouseEnter={setTrue}
        className={`absolute bg-white shadow-xl p-4 top-12 rounded-lg ${
          delayed ? "" : "hidden"
        } ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
