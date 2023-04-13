import React from "react";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";

const Banner = () => {
  return (
    <section className="mt-20">
      <h1 className="bg-gradient-to-r from-primaryColor via-thirdColor to-secondaryColor text-transparent bg-clip-text text-7xl font-bold leading-20 text-center">
        make your dream <br /> website Stand out <br /> in a crowd
      </h1>
      <SecondBanner></SecondBanner>
      <ThirdBanner></ThirdBanner>
    </section>
  );
};

export default Banner;
