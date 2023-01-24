import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

function PriceAndRating({}) {
  return (
    <main className="d-flex flex-column">
      <section className="d-flex justify-content-start align-items-start gap-2">
        <div className=" border font-size bg-dark">
          <p className="gap-1 text-white">
            3.8 <AiTwotoneStar />
          </p>
        </div>
        <div className="text-secondary  font-size">
          <p>
            <b>1,993 Ratings & 208 Reviews</b>
          </p>
        </div>
        <div className="">
          <img
            className="product_page_assured_image"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
            alt="err"
          />
        </div>
      </section>
      <section>
        <p>special price</p>
        <div className="d-flex gap-2">
          <h3>
            <FaRupeeSign /> 10944
          </h3>
          <div className="d-flex align-items-end gap-1">
            <p className="font-size text-secondary">
              <FaRupeeSign />
              13099
            </p>
            <p className="text-success">12% off</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PriceAndRating;
