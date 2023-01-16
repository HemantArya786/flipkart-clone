import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";

function ImageSection() {
  return (
    <section className=" d-flex flex-column">
      <div className="  d-flex">
        <div className="col-2 border">hello</div>
        <div className="col-10  d-flex justify-content-center">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kb2jmvk0/printer/h/y/5/hp-315-original-imafsg2yhdh8muzp.jpeg?q=70"
            alt="err"
          />
        </div>
      </div>

      <div className=" d-flex justify-content-center gap-3 pt-3">
        <div className="col-5 border product_page_buttons_one gap-2">
          <button className="btn  w-100 rounded-0 py-3 text-white  ">
            <b>
              <RiShoppingCart2Fill /> Add to cart
            </b>
          </button>
        </div>
        <div className="col-5  product_page_buttons_two">
          <button className="btn  w-100 rounded-0 py-3 text-white">
            <b>
              <AiFillThunderbolt /> Buy now
            </b>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
