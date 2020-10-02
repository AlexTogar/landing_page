import React from "react";
import HeroSection from "../../HeroSection.js";
import Pricing from "../../Pricing.js";
import { homeObjOne } from "./Data.js";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}
export default Services;
