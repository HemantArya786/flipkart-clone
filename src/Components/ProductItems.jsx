import React from "react";
import { Link } from "react-router-dom";

function ProductItems({ image, title, des, price }) {
  return (
    <Link to="/productpage" className="text-center">
      <div className="card " style={{ width: "18rem" }}>
        <div className="">
          <img
            src={image}
            className="card-img-top Product_image_size "
            alt="..."
          />
        </div>
        <div className="card-body text-decoration-none">
          <h6 className="text-dark  fw-semibold">{title}</h6>
          <p className="text-success-emphasis">{price}</p>
          <p className="card-text ">{des}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItems;
