import React from "react";
import { Link } from "react-router-dom";

function ProductItems({ image, title, dis }) {
  return (
    <main className=" " style={{ width: "18rem" }}>
      <Link to="/ProductPage">
        <img
          src={image}
          alt="err"
          className="card-img-top product-item-image-size "
        />
      </Link>
      <div className="text-center">
        <Link
          to="/ProductPage"
          className="card-title text-decoration-none text-dark"
        >
          <h6>{title}</h6>
        </Link>
        <Link to="/ProductPage" className="text-decoration-none">
          {dis}
        </Link>
      </div>
    </main>
  );
}

export default ProductItems;
