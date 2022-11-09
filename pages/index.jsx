import React from "react";
import Clients from "../components/sections/Clients";
import Help from "../components/sections/Help";
import Hero from "../components/sections/Hero";
import JoinUs from "../components/sections/JoinUs";
import Testimonies from "../components/sections/Testimonies";
import WhyWeDo from "../components/sections/WhyWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWeDo />
      <Testimonies />
      <Clients />
      <JoinUs />
      <Help />
    </>
  );
}
