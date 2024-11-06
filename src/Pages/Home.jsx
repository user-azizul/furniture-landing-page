import React from "react";
import WhyChoose from "../Component/WhyChoose";
import Hero from "../Component/Hero";
import Product from "./Shop/Product";
import Experience from "../Component/Experience";
import Materials from "../Component/Materials";

function Home() {
  return (
    <main>
      <Hero />
      <WhyChoose />
      <Product text={"Best Selling Product"} />
      <Experience />
      <Materials />
    </main>
  );
}

export default Home;
