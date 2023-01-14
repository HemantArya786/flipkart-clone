import React from "react";
import Categories from "../../Components/Categories";
import ImageSlider from "../../Components/ImageSlider";
import CarouselItems from "../../Components/CarouselItems";

function HomePage() {
  return (
    <div>
      <main className="App ">
        <section className="d-flex justify-content-between  p-2 bg-white">
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            title="Grocery"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
            title="Mobiles"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
            title="Fashion"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
            title="Electronics"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
            title="Home"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
            title="Appliances
"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100"
            title="Travel"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
            title="Top Offers"
          />
          <Categories
            image="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
            title="Beauty, Toys & More"
          />
          <Categories
            image="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
            title="Two Wheelers"
          />
        </section>
        <br />
        <section>
          <ImageSlider />
        </section>
        <br />
        <section className=" ">
          <CarouselItems />
        </section>
        <br />
      </main>
    </div>
  );
}

export default HomePage;
