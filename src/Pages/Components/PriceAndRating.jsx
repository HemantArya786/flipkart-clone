import React from "react";
import { FaRupeeSign } from "react-icons/fa";

function PriceAndRating() {
  return (
    <main className="d-flex flex-column">
      <section className="d-flex justify-content-start">
        <div>
          <p className=" border font-size">3.8 </p>
        </div>
        <div className="text-secondary ms-1 font-size">
          <p>1,993 ratings & 208 Reviews</p>
        </div>
      </section>
      <section>
        <p>special price</p>
        <div className="d-flex">
          <h3>
            <FaRupeeSign /> 10944
          </h3>
          <h6>
            <FaRupeeSign />
            13099
          </h6>
        </div>
      </section>
    </main>
  );
}

export default PriceAndRating;
