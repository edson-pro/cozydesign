import React from "react";
import Button from "../ui/Button";

export default function WhyWeDo() {
  return (
    <div>
      <div className="why-we-do relative py-36 px-0">
        <div className="max-w-[75rem] w-[85%] md:w-[73%]  lg:w-auto lg:flex-row flex-col pt-20 mx-auto flex items-center lg:items-start">
          <div className="w-full max-[50rem]  pr-8 pl-0 md:pl-[10vw]">
            <span className="mb-4 font-Geomanist text-[#223240] text-[1.875rem] leading-[1em] font-bold tracking-[.125rem] uppercase">
              🌴🐻 🇺🇸
            </span>
            <h4 className="text-[#223240] text-[4.375rem] leading-[4.375rem] mt-10 mb-3 font-semibold font-Fraunces72ptsupersoft">
              Get Cozy
            </h4>
            <p className="text-[2.3125rem] text-[#c47d57] leading-[3.375rem] font-normal">
              Design & digital marketing <br /> in San Diego, California
            </p>
            <p className="mt-10 mb-4 text-[#223240] text-[1.375rem] leading-[1.6em] font-Fraunces72ptsupersoft">
              We’re an award-winning design shop based in South Park, San Diego.
              We efficiently combine the best parts of user experience (UX) with
              creative design and execution to create effective collateral that
              connects with the human beings who interact with them. 🤯
              <br /> No epic quests for inspiration. Just pragmatic
              collaboration and efficient results from big-agency graduates with
              decades of experience.
            </p>
            <div className="my-10">
              <Button noPattern>Why we do what we do</Button>
            </div>
          </div>
          <div className="justify-end flex items-center">
            <div className="flex px-16 h-full items-stretch lg:px-5 flex-col gap-[1.875rem]">
              {[
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp",
                "https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp",
              ].map((e, index) => {
                return (
                  <a key={index} className="flex w-36">
                    <img className="w-full h-auto" src={e} alt="" />
                  </a>
                );
              })}
            </div>
            <div className="flex px-16 lg:px-5 flex-col gap-[1.875rem]">
              {[
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp",
                "https://agencyvista.com/verified-agency-vista-badge.png",
                "https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp",
              ].map((e, index) => {
                return (
                  <a key={index} className="flex w-36">
                    <img className="w-full h-auto" src={e} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <div
            style={{ backgroundPosition: "50% 50%" }}
            className=" flot-el opacity-10 bg-dot-pattern absolute right-[12%] -top-20 w-[15.5rem] h-[15.5rem] rounded-[50%] "
          ></div>
        </div>
      </div>
    </div>
  );
}
