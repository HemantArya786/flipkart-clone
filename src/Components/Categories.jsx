import React from "react";
import { Link } from "react-router-dom";

function Categories({ title, image }) {
  return (
    <main className="card border-0 " style={{ width: "8rem" , height:"60px"  }}>
      <div className="d-flex justify-content-center">
        <img src={image} alt="err" className="card-img-top w-50 " />
      </div>
      <div className="text-center bg-white  ">
        <Link to="ee" className="card-title  text-decoration-none text-dark title_size">
        {title}
          
        </Link>
      </div>
    </main>
  );
}

export default Categories;
