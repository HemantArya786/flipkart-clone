import React from "react";
import { Link } from "react-router-dom";

function ProductItems({ image, title, dis, price }) {
  return (
    <main className="  d-flex flex-column justify-content-between align-items-between " style={{ width: "100%", height: "246px" }}>
      <section className=" ">
        <Link to="/ProductPage" className="d-flex justify-content-center mt-2  ">
          <img
            src={image}
            alt="err"
            className="card-img-top product-item-image-size  "
            style={{ width: "80%" }}
          />
        </Link>
      </section>
      <section className="text-center   ">
        <div>
          <Link
            to="/ProductPage"
            className="card-title text-decoration-none text-dark "
          >
            <h6 className="m-0">{title}</h6>
          </Link>
        </div>
        
        <div><p className="m-0 text-success font_price">{price}</p></div>

        <div>
          <Link
            to="/ProductPage"
            className="text-decoration-none text-secondary"
          >
            
            <p className="m-0 font-size text-secondary">{dis}</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductItems;
