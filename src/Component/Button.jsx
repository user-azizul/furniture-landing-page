import React from "react";
import buttonImg from "../assets/button-icon.png";

function Button({ text }) {
  return (
    <button className="text-sm flex items-center justify-center md:justify-start text-center md:text-left gap-1 text-primary">
      {text}
      <img src={buttonImg} alt="" />
    </button>
  );
}

export default Button;
