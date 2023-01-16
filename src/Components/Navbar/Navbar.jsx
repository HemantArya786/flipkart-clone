import React from "react";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const logoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <main className=" navbar_container d-flex container ">
      <section className="pt-1 ms-5 ">
        <Link to="/">
          <img className="logo_url" src={logoUrl} alt="err" />
        </Link>
        <Link className="d-flex p-tag gap-1 fst-italic ">
          <p className="text-white">
            <b>explore</b>
          </p>
          <p className="text-warning">
            <b>plus</b>
          </p>
          <img src={subURL} alt="err" className="sub_Url" />
        </Link>
      </section>
      <section className="mx-3 d-flex align-items-center">
        <section className="d-flex">
          <div>
            <input className="input_serach border-0  shadow " placeholder="    Search for products, brands and more" />
          </div>
          <div className=" p-1 search-icon px-3">
           <BiSearch  className="icon_size"/>
          </div>
        </section>
        <section className="  ms-5 text-white d-flex gap-5 pt-2 ">
          <h6>
       
              login <RiArrowDropDownLine />
           
          </h6>
          <h6>
            became a seller
          </h6>
          <h6  className="d-flex align-items-center gap-1">
              More <RiArrowDropDownLine />
          </h6>
          <h6 className="d-flex align-items-center gap-2">
              <AiOutlineShoppingCart /> Cart
          </h6>
        </section>
      </section>
    </main>
  );
}

export default Navbar;
