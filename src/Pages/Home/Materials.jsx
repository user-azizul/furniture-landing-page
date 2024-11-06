import React from "react";
import Container from "../../Component/Container";
import material1 from "../../assets/material1.png";
import material2 from "../../assets/material2.png";
import material3 from "../../assets/material3.png";
import Button from "../../Component/Button";

const Materials = () => {
  return (
    <section className="my-24">
      <Container className="flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
        <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start mx-auto">
          <h3 className="text-lg font-semibold text-primary mb-4">Materials</h3>
          <h2 className="text-4xl font-bold mb-4 capitalize lg:w-1/2">
            Very serious materials for making furniture
          </h2>
          <p className="text-secondary dark:text-white mb-5 lg:w-2/3">
            Because Panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price.
          </p>
          <div className="flex justify-center md:justify-start w-full">
            <Button text="More Info" />
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <div className="flex flex-col items-center">
            <img src={material1} alt="Material 1" className="mb-4" />
            <img src={material2} alt="Material 2" className="mb-4" />
          </div>
          <div className="md:col-span-2 col-span-1 md:h-[547px] flex items-center justify-center">
            <img src={material3} alt="Material 3" className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Materials;
