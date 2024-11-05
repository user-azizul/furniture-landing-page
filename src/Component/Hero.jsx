import React from "react";
import bannerImg from "../assets/banner.png";
function Hero() {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute w-full h-full bg-black/70 z-10"></div>
      <div className="md:pt-44 px-2 pt-24 text-center space-y-6 md:w-1/2 mx-auto z-20">
        <h1
          className="text4xl
       lg:text-6xl font-medium lg:leading-tight leading-snug capitalize"
        >
          make your interior more minimalistic & morder
        </h1>
        <p className="text-2xl font-normal lg:w-1/2 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>
      </div>
    </section>
  );
}

export default Hero;
