import React from "react";

function Categories({ title, image }) {
  return (
    <main className="card border-0 " style={{ width: "8rem" }}>
      <img src={image} alt="err" className="card-img-top w-75 " />
      <div className="text-start  ps-3">
        <a href="ee" className="card-title text-decoration-none text-dark">
          {title}
        </a>
      </div>
    </main>
  );
}

export default Categories;
