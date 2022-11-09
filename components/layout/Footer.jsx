import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#e4ded5] px-10 py-10">
      <div className="flex max-w-6xl md:flex-row flex-col  mx-auto py-6 items-center justify-between">
        <div className="flex md:flex-row flex-col items-center gap-10">
          <img
            className="w-20 h-12"
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg"
          />
          <ul className="flex md:flex-row md:mb-0 mb-7 flex-col items-center gap-5">
            {[
              { title: "about", link: "/about" },
              { title: "service", link: "/service" },
              { title: "work", link: "/work" },
              { title: "blog", link: "/blog" },
              { title: "contact", link: "/contact" },
            ].map((e, index) => {
              return (
                <li className="" key={index}>
                  <Link className="text-[#b55730] capitalize " href="">
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2 lg:gap-5">
          <div className="flex items-center">
            <img
              className="h-4 w-4"
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp"
              alt=""
            />
            <span className="text-[#d90f54] ml-2 text-sm">
              San Diego Digital Designers
            </span>
          </div>
          <div className="flex items-center gap-2 py-3">
            {[
              {
                color: "#1da1f2",
                link: "icon-white.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec709b2703dcf_twitter-icon-white.svg",
              },
              {
                color: "#2977C9",
                link: "20linkedin.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b7ca6c2fa8225b032800f4b_logo%20linkedin.svg",
              },
              {
                color: "#4267B2",
                link: "facebook-icon-white.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec76cb2703dcb_facebook-icon-white.svg",
              },
              {
                color: "#E4405F",
                link: "instagram-icon-white.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72b67703dcc_instagram-icon-white.svg",
              },
              {
                color: "#C4302B",
                link: "youtube-white.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/603d6382bef83b84cdeb5671_icn_youtube-white.svg",
              },
              {
                color: "#16313A",
                link: "clutch.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/633246b3d2509ffd71749f81_clutch.svg",
              },
              {
                color: "#223240",
                link: "mail.com",
                icon: "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b807bd69a836145c6f39016_icon%20envelope.svg",
              },
            ].map((e) => {
              return (
                <Link
                  style={{ backgroundColor: e.color }}
                  className="h-6 w-6 flex justify-center rounded-sm shadow-md items-center"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="w-3 h-3" src={e.icon} alt="" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full  max-w-6xl mx-auto my-3 h-[.0938rem] bg-[#d4ac8e]" />
      <div className="flex lg:flex-row flex-col pt-6 justify-between items-center max-w-6xl mx-auto">
        <div className="flex  gap-6 items-center">
          <Link href="/">
            <img
              className="w-40 h-14"
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg"
              alt=""
            />
          </Link>{" "}
          <Link href="/">
            <img
              className="w-40 h-auto"
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member-p-500.png"
              alt=""
            />
          </Link>{" "}
        </div>
        <div className="flex lg:flex-row flex-col my-5 lg:my-0 gap-5 items-center">
          <p className="text-xs text-[#223240]">
            Made with ❤️ love in beautiful, sunny San Diego. ©2021
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link href="/privacy" className="text-[#b55730] capitalize ">
              privacy
            </Link>
            <Link className="text-[#b55730] capitalize " href="/">
              photo credit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
