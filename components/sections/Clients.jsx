import React from "react";

export default function Clients() {
  return (
    <div className="bg-[#223240] ">
      <div className="max-w-5xl mx-auto py-12  flex flex-col items-center justify-center px-3">
        <h4 className="text-[#d4ac8e] text-3xl my-8 text-center font-Fraunces72ptsupersoft">
          More than 150 happy clients
        </h4>
        <div className="flex gap-10 flex-wrap w-5/6  my-6 px-10 items-center justify-center">
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
                className="h-[2rem] max-w-full inline-block"
                src={e}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
