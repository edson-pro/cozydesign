import React from "react";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <div className="hero lg:h-[960px] relative z-10 overflow-hidden">
        <div className="max-w-[1400px] h-full md:w-[83%] lg:w-auto px-4 lg:flex-row flex-col gap-10 flex mx-auto">
          <div className="w-full pr-[60px] pt-40 pb-20">
            <h4 className="hero-title text-[#d4ac8e] bg-opacity-0 bg-[length:50px] color-[#d4ac8e] font-Fraunces144ptsupersoft text-[80px] lg:text-[90px] font-extrabold leading-[87px] lg:leading-[99px] mb-[20px] pb-[10px]">
              Your design <br /> team for the cost of a salary.
            </h4>
            <p className="hero-subtitle bg-[length:0px] text-[#e4ded5] font-Fraunces72ptsupersoft text-[40px] font-semibold leading-[52px] my-5 py-[10px]">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should have a
              design
              <br /> team but you don't?
            </p>
            <Button>
              <span className="uppercase">
                See how we work & what we can do
              </span>
            </Button>
          </div>
          <div className="w-full h-full lg:mt-[50px] lg:-mr-10 flex items-end justify-end">
            <img
              className=" static px-10 lg:px-0 lg:max-w-[120%] lg:-mr-32 -mb-40 lg:mb-0 lg:mt-[220px]"
              src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="why-we-do relative py-36 px-0">
        <div className="max-w-[1200px] w-[85%] md:w-[73%]  lg:w-auto lg:flex-row flex-col pt-20 mx-auto flex items-center lg:items-start">
          <div className="w-full max-[800px]  pr-8 pl-0 md:pl-[10vw]">
            <span className="mb-4 font-Geomanist text-[#223240] text-[30px] leading-[1em] font-bold tracking-[2px] uppercase">
              🌴🐻 🇺🇸
            </span>
            <h4 className="text-[#223240] text-[70px] leading-[70px] mt-10 mb-3 font-semibold font-Fraunces72ptsupersoft">
              Get Cozy
            </h4>
            <p className="text-[37px] text-[#c47d57] leading-[54px] font-normal">
              Design & digital marketing <br /> in San Diego, California
            </p>
            <p className="mt-10 mb-4 text-[#223240] text-[22px] leading-[1.6em] font-Fraunces72ptsupersoft">
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
            <div className="flex px-16 h-full items-stretch lg:px-5 flex-col gap-[30px]">
              {[
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp",
                "https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp",
              ].map((e) => {
                return (
                  <a className="flex w-36">
                    <img className="w-full h-auto" src={e} alt="" />
                  </a>
                );
              })}
            </div>
            <div className="flex px-16 lg:px-5 flex-col gap-[30px]">
              {[
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp",
                "https://agencyvista.com/verified-agency-vista-badge.png",
                "https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png",
                "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp",
              ].map((e) => {
                return (
                  <a className="flex w-36">
                    <img className="w-full h-auto" src={e} alt="" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <div className=" flot-el absolute right-[12%] -top-20 w-[248px] h-[248px] rounded-[50%] "></div>
        </div>
      </div>
      <div className="py-36 px-6 bg-[#e4ded5]">
        <div className="flex items-center gap-10 justify-center flex-col">
          <h4 className="text-[61px] font-semibold text-[#223240] leading-[65px] text-center">
            ❤️ from our clients
          </h4>
          <div className="w-[40px] h-1 bg-[#d4ac8e] mt-2"></div>
        </div>
        <div className="lg:w-[83%] max-w-6xl mx-auto mt-10 relative">
          <div className="flex gap-0 lg:flex-row flex-col relative items-end justify-center">
            <div className="m-[8px]  lg:m-[15px] w-full flex flex-col items-end">
              <div
                className={`bg-[#223240] shadow-2xl noise-bg w-full lg:w-[85%] ml-auto items-end text-end rounded-t-[80%] rounded-bl-[100%] pr-[40px] pl-[60px] py-[80px] `}
              >
                <div className="flex justify-center items-center">
                  <img
                    className="w-[80px] my-4 rounded-lg border-[3px] object-cover border-white"
                    src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="font-Fraunces72ptsupersoft my-3 text-[#d4ac8e] font-semibold text-[20px]">
                    “One of the top design professionals…”
                  </h4>
                  <p className="text-[#e4ded5] my-3 text-[18px] ">
                    I connect with hundreds of talented folks on a regular
                    basis, and I can say with complete confidence that Lee is
                    one of the best UX designers in Aquent/Vitamin T's global
                    network.
                  </p>
                  <div className="my-4">
                    <h4 className="text-[#e4ded5]  tracking-[3px] uppercase font-Geomanist text-sm font-semibold">
                      SUSIE POLLASKY
                    </h4>
                    <p className="text-sm my-2 text-[#e4ded5] text-opacity-30">
                      Now: Leadership Recruiting @ Product Design <br /> at
                      Facebook
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute hidden md:block -bottom-12 z-20">
              <div className="bg-white top-[50%] relative h-24 w-24 shadow-xl rounded-full flex items-center justify-center">
                <div className="border border-white w-[120%] h-[120%] rounded-full absolute -top-2 -left-2 -bottom-0 -right-2"></div>
                <div className="border border-white border-opacity-50 w-[140%] h-[140%] rounded-full absolute -top-4 -left-4 -bottom-4 -right-4"></div>
                <img
                  src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72df4703e47_chat-icon-black.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex w-full m-[8px]  lg:m-[15px]  flex-col items-start">
              <div
                className={`bg-[#2d4850] shadow-2xl noise-bg w-full  lg:w-[65%] items-start text-start  rounded-t-[80%] rounded-br-[40%] pr-[40px] pl-[60px] py-[80px] `}
              >
                <div className="flex justify-center items-center">
                  {" "}
                  <img
                    className="w-[80px] my-4 rounded-lg border-[3px] object-cover border-white"
                    src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp"
                    alt=""
                  />
                </div>

                <div className="max-w-xs">
                  <h4 className="font-Fraunces72ptsupersoft my-3 text-[#d4ac8e] font-semibold text-[20px]">
                    “One of the top design professionals…”
                  </h4>
                  <p className="text-[#e4ded5] my-3 text-[18px] ">
                    Cost per conversion and all of those metrics have dropped
                    significantly. We used to pay an average of $100 per lead
                    that converts… now we have that down to about $20. Sessions
                    and contacts have also gone up astronomically, at least
                    threefold. Organic search and social media referrals have
                    all continued to skyrocket. We’re really pleased.
                  </p>
                  <div>
                    <h4 className="text-[#e4ded5]  tracking-[3px] uppercase font-Geomanist text-sm font-semibold">
                      MARTIN SPRITZER
                    </h4>
                    <p className="text-sm text-opacity-40 my-2 text-[#e4ded5]">
                      General Manager @ iQuoteXpress
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 lg:flex-row flex-col relative items-start justify-center">
            <div className="m-[8px]  lg:m-[15px]  w-full justify-center flex flex-col items-start">
              <div
                className={`bg-[#c47d57] w-full shadow-2xl noise-bg md:w-[90%] lg:w-[75%] ml-auto items-end text-end rounded-b-[60%] rounded-tl-[100%] pl-[40px] pr-[60px] p-[80px] `}
              >
                <div className="max-w-xs ml-auto">
                  <div className="flex justify-end items-center">
                    <img
                      className="w-[80px] my-4 rounded-lg border-[3px] object-cover border-white"
                      src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h4 className="font-Fraunces72ptsupersoft my-3 text-white font-semibold text-[20px]">
                      “They're just good people.”
                    </h4>
                    <p className="text-[#e4ded5] my-3 text-[18px] ">
                      They were a pleasure to work with and I'm really happy
                      with the results. They pretty much nailed it.
                    </p>
                    <div>
                      <h4 className="text-[#e4ded5]  tracking-[3px] uppercase font-Geomanist text-sm font-semibold">
                        ERIC WEISS
                      </h4>
                      <p className="text-sm my-2 text-[#e4ded5]">
                        Founder @ Full Cycle Product Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full  m-[8px]  lg:m-[15px]   flex-col items-end">
              <div
                className={`bg-[#b55730] w-full shadow-2xl md:w-[95%] lg:w-[85%] mr-auto  items-start text-start  rounded-b-[80%] rounded-tr-[100%] pr-[40px] pl-[60px] pt-[80px] pb-[100px] `}
              >
                <div className="flex justify-start items-center">
                  {" "}
                  <img
                    className="w-[80px] my-4 rounded-lg border-[3px] object-cover border-white"
                    src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb8a427acfd62e2c3148c_Michael%20Weisfeld-p-500.webp"
                    alt=""
                  />
                </div>

                <div className="max-w-xs">
                  <h4 className="font-Fraunces72ptsupersoft my-3 text-white font-semibold text-[20px]">
                    “The project was successful”
                  </h4>
                  <p className="text-[#e4ded5] my-3 text-[18px] ">
                    They strive to come up with good design, and they focus on
                    all the right things. The quality of their work is high, and
                    all the deliverables are very well-organized and
                    professional.
                  </p>
                  <div>
                    <h4 className="text-[#e4ded5]  tracking-[3px] uppercase font-Geomanist text-sm font-semibold">
                      MICHAEL WEISFELD
                    </h4>
                    <p className="text-sm my-2 text-[#e4ded5]">
                      Director of Digital Marketing @ National Funding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#223240] ">
        <div className="max-w-5xl mx-auto py-12  flex flex-col items-center justify-center px-3">
          <h4 className="text-[#d4ac8e] text-3xl my-8 text-center font-Fraunces72ptsupersoft">
            More than 150 happy clients
          </h4>
          <div className="flex gap-10 flex-wrap w-[83%] my-6 px-10 items-center justify-center">
            {[
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ae2c425f4ec285598c_NPCA%20logo%20-%20light.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ba7d82c245fddf1b2e_national%20funding%20logo%20full.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ef53cdd1e1f8cac5b1_lightstream%20logo.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ffe9c75f7306788487_Sapient.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87770a7e08d5bda4246f2d_thermofisher%20logo%20full.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87771603d57a6804b8e1b9_sony%20logo%20full.svg",
              "https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8777233f953b1ce5aa8781_sdge%20logo.svg",
            ].map((e) => {
              return (
                <img
                  className="h-[32px] max-w-full inline-block"
                  src={e}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-black bg-opacity-80 z-10 bg-cover object-cover top-0 w-full h-full"></div>
        <video
          autoPlay
          loop
          src="/videos/vid.mp4"
          className="absolute -z-10 bg-cover object-cover top-0 w-full h-full"
        />
        <div className="max-w-6xl md:w-[83%] lg:w-auto relative z-30 py-16 mx-auto px-3">
          <div className="flex lg:w-auto  lg:flex-row flex-col gap-8">
            <div className="flex items-center justify-center">
              <div className="h-[120px] w-[320px]">
                <img
                  className="h-full w-full"
                  src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="ml-20 my-8 lg:my-0 lg:ml-0">
              <p className="text-[48px] leading-[55px] font-Fraunces72ptsupersoft text-white">
                Psst…
                <br /> are you a designer?
              </p>
              <p className="text-[20px] my-5 font-Fraunces72ptsupersoft text-[#e4ded5]">
                Consider joining our{" "}
                <span className="text-[#d90f54]">
                  San Diego Design Designers
                </span>{" "}
                group. More than 700 people, we meet online via Slack and in
                person at social events around the city. It’s a great
                opportunity to share ideas, get inspired, find support, and
                celebrate great design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#b55730] py-16 px-6 ">
        <div className="justify-center flex items-center">
          <h4 className="text-[48px] font-bold font-Fraunces72ptsupersoft text-white ">
            🙋 How can we help?
          </h4>
        </div>
      </div>
    </>
  );
}
