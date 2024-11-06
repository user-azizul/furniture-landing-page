import React from "react";
import Container from "./Container";
import Button from "./Button";

function WhyChoose() {
  return (
    <section>
      <Container>
        <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold">
              Why <br />
              Choosing Us
            </h2>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-3">Luxury Facilities</h3>
            <p className="text-base mb-2">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button text="More Info" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
            <p className="text-base mb-2">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button text="More Info" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
            <p className="text-base mb-2">
              The advantage of hiring a workspace with us is that it gives you
              comfortable service and all-around facilities.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button text="More Info" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChoose;
