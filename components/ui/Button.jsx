import React from "react";

export default function Button({
  children,
  variant,
  onClick,
  noPattern,
  className,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex hover:bg-opacity-75 ${
        noPattern ? "" : "btn"
      } bg-noise rounded-[.625rem]  text-[#e4ded5] font-Geomanist font-bold justify-center tracking-[.125rem] leading-5 py-[1.875rem] px-[2.5rem] text-center uppercase bg-[#b55730] items-center `}
    >
      {children}
    </button>
  );
}
