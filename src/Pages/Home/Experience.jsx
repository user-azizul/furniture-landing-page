import React from "react";
import Container from "../../Component/Container";
import experiencesImg from "../../assets/expricences.png";
import Button from "../../Component/Button";

function Experience() {
  return (
    <section className="my-24">
      <Container className="flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 mx-auto">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={experiencesImg}
            alt="Experience"
            className="w-5/6 md:w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold text-primary mb-4">
            Experiences
          </h3>
          <h2 className="text-4xl font-bold mb-4 capitalize lg:w-1/2">
            We provide you the best experience
          </h2>
          <p className="text-secondary dark:text-white mb-5 lg:w-2/3">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and luxurious style and with premium quality
            materials.
          </p>
          <div className="flex justify-center md:justify-start w-full">
            <Button text={"More Info"} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
