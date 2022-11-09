import Link from "next/link";
import React from "react";
import Menu from "../icons/menu";

export default function Navabar() {
  const links = [
    { title: "Get Cozy", href: "/get-cozy" },
    { title: "What we do", href: "/what-we-do" },
    { title: "Our work", href: "/our-work" },
    { title: "The blog", href: "/blog" },
    { title: "Say hi", href: "/say-hi" },
  ];
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(270deg, #302f39, #223240 95%)",
      }}
      className="nav fixed w-full z-50"
    >
      <div className="flex py-[1.375rem] ml-10 mr-6 mx-auto px-3  items-center justify-center lg:justify-between">
        <div>
          <Link href="/">
            <img
              className="w-[6.25rem] mx-5 lg:mx-0 h-[4.3125rem]"
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f86150178cfb414cd74bce4_Cozy_logo_canvas.svg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden ">
            {links.map((e, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-[#e4ded5] py-7 px-4 text-[1.5625rem] font-semibold"
                    href={e.href}
                  >
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a className="lg:hidden mx-5 lg:mx-0  block text-opacity-80 text-white">
            <Menu />
          </a>
        </div>
      </div>
    </div>
  );
}
