import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne } from "./Data.js";
function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}
export default Home;
