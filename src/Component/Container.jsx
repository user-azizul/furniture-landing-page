import React from "react";

function Container({ children, className }) {
  return (
    <div className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${className}`}>
      {children}
    </div>
  );
}

export default Container;
