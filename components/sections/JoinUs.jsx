import React from "react";

export default function JoinUs() {
  return (
    <div className="relative">
      <div className="absolute bg-black bg-opacity-80 z-10 bg-cover object-cover top-0 w-full h-full"></div>
      <video
        autoPlay
        loop
        src="/videos/vid.mp4"
        className="absolute -z-10 bg-cover object-cover top-0 w-full h-full"
      />
      <div className="max-w-6xl md:w-5/6  lg:w-auto relative z-30 py-16 mx-auto px-3">
        <div className="flex lg:w-auto  lg:flex-row flex-col gap-8">
          <div className="flex items-center justify-center">
            <div className="h-[7.5rem] w-[20rem]">
              <img
                className="h-full w-full"
                src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg"
                alt=""
              />
            </div>
          </div>
          <div className="ml-20 my-8 lg:my-0 lg:ml-0">
            <p className="text-[3rem] leading-[3.4375rem] font-Fraunces72ptsupersoft text-white">
              Psst…
              <br /> are you a designer?
            </p>
            <p className="text-[1.25rem] my-5 font-Fraunces72ptsupersoft text-[#e4ded5]">
              Consider joining our{" "}
              <span className="text-[#d90f54]">San Diego Design Designers</span>{" "}
              group. More than 700 people, we meet online via Slack and in
              person at social events around the city. It’s a great opportunity
              to share ideas, get inspired, find support, and celebrate great
              design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
