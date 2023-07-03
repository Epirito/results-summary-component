import { useState } from "preact/hooks";
import { ComponentChild, ComponentChildren } from "preact";

/*
title is the text that appears on the button
children are the dropdown items
 */
export default function Dropdown(
  { title, innerClassName, children, undetached }: {
    title: string | ComponentChild;
    innerClassName?: string;
    children: ComponentChildren;
    undetached?: boolean;
  },
) {
  const [hover, setHover] = useState(false);
  const setTrue = () => {
    setHover(true);
  };
  const setFalse = () => {
    setHover(false);
  };
  const toggle = () => {
    setHover((previous) => !previous);
  };
  return (
    <div className="relative" onMouseLeave={undetached ? undefined : setFalse}>
      <button
        className={`${innerClassName} cursor-default flex items-center gap-1 font-semibold ${
          hover ? "text-black" : "text-gray-500"
        }`}
        style={{ outline: "none" }}
        onFocus={undetached ? undefined : setTrue}
        onBlur={undetached ? undefined : setFalse}
        onMouseEnter={undetached ? undefined : setTrue}
        onClick={undetached ? toggle : undefined}
      >
        {title}
        <img
          className="w-2"
          src={`/intro-dropdown/icon-arrow-${hover ? "up" : "down"}.svg`}
        />
      </button>
      <div
        className={`${
          undetached ? "pl-4" : "absolute shadow-xl p-4"
        } bg-white rounded-xl ${hover ? "" : "hidden"} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
