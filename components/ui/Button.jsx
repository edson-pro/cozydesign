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
      }  rounded-[10px]  text-[#e4ded5] font-Geomanist font-bold justify-center tracking-[2px] leading-5 py-[30px] px-[40px] text-center uppercase bg-[#b55730] items-center `}
    >
      {children}
    </button>
  );
}
