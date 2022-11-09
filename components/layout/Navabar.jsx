import Link from "next/link";
import React from "react";

export default function Navabar() {
  const links = [
    { title: "Get Cozy", href: "/get-cozy" },
    { title: "What we do", href: "/what-we-do" },
    { title: "Our work", href: "/our-work" },
    { title: "The blog", href: "/blog" },
    { title: "Say hi", href: "/say-hi" },
  ];
  return (
    <div className="nav fixed w-full z-50">
      <div className="flex py-[22px] ml-10 mr-6 mx-auto px-3  items-center justify-center lg:justify-between">
        <div>
          <Link href="/">
            <img
              className="w-[100px] mx-5 lg:mx-0 h-[69px]"
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
                    className="text-[#e4ded5] py-7 px-4 text-[25px] font-semibold"
                    href={e.href}
                  >
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            className="lg:hidden mx-5 lg:mx-0  block text-opacity-80 text-white"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
