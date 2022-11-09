import React from "react";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(90deg, #302f39, #223240)",
      }}
      className="hero lg:h-[60rem] relative z-10 overflow-hidden"
    >
      <div className="max-w-[87.5rem] h-full md:w-[83%] lg:w-auto px-4 lg:flex-row flex-col gap-10 flex mx-auto">
        <div className="w-full pr-14 pt-40 pb-20">
          <h4 className="hero__title text-primaryLight bg-opacity-0 bg-[length:3.125rem] font-Fraunces144ptsupersoft text-[5rem] lg:text-[5.625rem] font-extrabold leading-[5.4375rem] lg:leading-[6.1875rem] mb-5 pb-[.625rem]">
            Your design <br /> team for the cost of a salary.
          </h4>
          <p className="hero__subtitle bg-[length:0rem] text-gray-300 opacity-75 font-Fraunces72ptsupersoft text-[2.5rem] font-semibold leading-[3.25rem] my-5 py-[.625rem]">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don't?
          </p>
          <div className="mt-3">
            <Button>
              <span className="uppercase">
                See how we work & what we can do
              </span>
            </Button>
          </div>
        </div>
        <div className="w-full h-full lg:mt-12 lg:-mr-10 flex items-end justify-end">
          <img
            className=" static px-10 lg:px-0 lg:max-w-[120%] lg:-mr-32 -mb-40 lg:mb-0 lg:mt-56"
            src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
