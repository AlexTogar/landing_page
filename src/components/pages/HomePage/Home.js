import React from "react";
import HeroSection from "../../HeroSection.js";
import Pricing from "../../Pricing.js";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data.js";
function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}
export default Home;
