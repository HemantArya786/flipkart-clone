import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

function ImageSection() {
  return (
    <main className=" d-flex flex-column">
      <section className="  d-flex">
        <div className="col-sm-2 "></div>
        <div className="col-sm-10 d-flex justify-content-center">
          <img
            className="image_size"
            src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/t/k/9-380815-9-puma-black-silver-original-imaghreeykjygnqa.jpeg?q=70"
            alt="eer"
          />
        </div>
      </section>

      <section className=" d-flex  pt-3">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 d-flex gap-2 justify-content-center ">
          <div className="col-sm-5  border product_page_buttons_one gap-2">
            <button className=" w-100  product_page_buttons_one border-0 rounded-0 py-2 text-white  ">
              <b>
                <RiShoppingCart2Fill /> Add to cart
              </b>
            </button>
          </div>
          <div className="col-sm-5  product_page_buttons_two">
            <button className=" w-100 border-0 rounded-0  product_page_buttons_two py-2 text-white">
              <b>
                <AiFillThunderbolt /> Buy now
              </b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ImageSection;
