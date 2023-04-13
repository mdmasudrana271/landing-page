import React from "react";
import playLogo from "../../assets/img/google-play-store-badge-en-removebg-preview.png";
import appLogo from "../../assets/img/app-store-badge-og-removebg-preview.png";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const ThirdBanner = () => {
  return (
    <section className="md:mt-96 mt-10 md:flex justify-around items-center px-2">
      {/* left section  */}
      <section className="">
        {/* card-1  */}
        <CardOne></CardOne>
        {/* card-2  */}
        <CardTwo></CardTwo>
      </section>
      {/* right section  */}
      <section className="mt-10">
        <h1 className="text-white text-5xl font-semibold mb-6 ">
          Easily control your <br /> billing & invoicing.
        </h1>
        <p className="text-slate-400 text-lg">
          Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices
          ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor
          integer platea placerat.
        </p>
        <div className="flex justify-start items-center">
          <img className="w-32" src={appLogo} alt="" />
          <img className="w-32" src={playLogo} alt="" />
        </div>
      </section>
    </section>
  );
};

export default ThirdBanner;
