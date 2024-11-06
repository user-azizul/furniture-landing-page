import React from "react";
import bannerImg from "../../assets/banner.png";
import Container from "../../Component/Container";
import Product from "./Product";

function Shop() {
  return (
    <section className="min-h-screen">
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-bold"> Shop Our Products</h1>
      </div>

      <Product text={`What's Your Choice`} />
    </section>
  );
}

export default Shop;
