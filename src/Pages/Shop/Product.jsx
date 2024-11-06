import React, { useState } from "react";
import Container from "../../Component/Container";
import { products } from "../../utils/productArr";
import ProductCard from "./ProductCard";
import buttonImg from "../../assets/button-icon.png";

function Product({ text }) {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [total, setTotal] = useState(4);
  const [showBtn, setShowBtn] = useState(true);
  function loadMore() {
    setTotal((prev) => prev + 4);
    setShowBtn(false);
  }
  function handleCategoryClick(category) {
    setSelectedCategory(category);
    setTotal(4);
    setShowBtn(true);
  }
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold text-center my-8">{text}</h1>
        {/* Category tabs */}
        <div
          className="bg-gray-300
         md:max-w-md w-full mx-auto rounded-full md:p-2.5 p-2 py-3 sm:py-4 mb-16"
        >
          <div className="flex items-center justify-center gap-4 md:justify-around">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`py-1.5  px-6 rounded-full hover:bg-primary hover:text-white transition-colors ${
                  selectedCategory === category ? "bg-white" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, total).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {showBtn && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={() => loadMore()}
              className="text-primary font-bold flex items-center px-4 py-2 rounded-full hover:text-white  gap-1 hover:bg-secondary transition-colors"
            >
              View More
              <img src={buttonImg} alt="" />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Product;
