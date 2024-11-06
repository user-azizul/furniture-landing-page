import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import Container from "../../Component/Container";
import Rating from "../../Component/Rating";
import { FiPlus } from "react-icons/fi";

function ProductCard({ product }) {
  return (
    <div className="bg-[#fafafa border-2 border-gray-300 shadow-lg">
      <Container>
        <div>
          <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
        </div>
        <div className=" p-6 wg-white bark:bg-black shadow-sm">
          <h4 className="text-base mb-1">{product.category} </h4>
          <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
          <Rating rating={product.rating} />
          <div className="flex mt-5 justify-between items-center">
            <p className="text-secondary  justify-normal items-center dark:text-white font-bold text-lg ">
              <sup className=" mr-1">$</sup>
              <span>{product.price}</span>
            </p>
            <button className="bg-secondary/90 hover:bg-black p-2 rounded-full text-white">
              <FiPlus />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductCard;
