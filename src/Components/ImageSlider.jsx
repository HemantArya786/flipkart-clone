import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageSlider() {
  return (
    <main className="border">
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/6250c99d28eaffe1.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c1120be588deebdc.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/51d44c9cb0d80a64.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/ae9bdff264fca3bb.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/51d44c9cb0d80a64.jpg?q=50"
            alt="err"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/c667a4b79c937454.jpg?q=50"
            alt="err"
          />
        </div>
      </Carousel>
    </main>
  );
}

export default ImageSlider;
