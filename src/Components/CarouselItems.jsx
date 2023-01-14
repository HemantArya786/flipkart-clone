import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItemSlider from "./ProductItems";

function CarouselED() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
          title="Monitors"
          dis="Samsung"
        />
      </div>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
          title="Top Mirrorless Camera"
          dis="canon"
        />
      </div>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
          title="Printer"
          dis="hp"
        />
      </div>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
          title="Monitors"
          dis="Samsung"
        />
      </div>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
          title="Top Mirrorless Camera"
          dis="canon"
        />
      </div>
      <div>
        <ProductItemSlider
          image="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
          title="Printer"
          dis="hp"
        />
      </div>
    </Carousel>
  );
}

export default CarouselED;
