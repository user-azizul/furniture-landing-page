import React from "react";
import WhyChoose from "./WhyChoose";
import Hero from "./Hero";
import Product from "../Shop/Product";
import Experience from "./Experience";
import Materials from "./Materials";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <Product text={"Best Selling Product"} />
      <Experience />
      <Materials />
      <Testimonials />
    </main>
  );
}

export default Home;
