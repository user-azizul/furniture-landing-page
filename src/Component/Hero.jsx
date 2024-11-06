import React from "react";
import bannerImg from "../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import Container from "./Container";

function Hero() {
  return (
    <section
      className="md:h-screen h-[500px]  relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="absolute w-full h-full bg-black/70 z-10"></div>
      <Container>
        {" "}
        {/* Background overlay with opacity */}
        {/* Text content */}
        <div className="relative z-20 md:pt-40 pt-24 text-center space-y-6 lg:w-1/2 w-4/5 sm:w-3/4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-medium lg:leading-tight !leading-snug capitalize">
            make your interior more minimalistic & modern
          </h1>
          <p className="md:text-2xl text-xl  font-normal  mx-auto">
            Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
          {/* search field  */}
          <div className="relative inline-block z-30">
            <input
              type="text"
              placeholder="search furniture"
              class="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full text-primary cursor-pointer">
              <FaSearch />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
