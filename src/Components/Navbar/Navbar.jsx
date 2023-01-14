import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Components/LoginButton";
import SearchBar from "./Components/SearchBar";
import "./Navbar.css";

function Navbar() {
  const logoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <main className="navbar container d-flex ">
      <div className=" ">
        <Link to="/">
          <img className="logo-url" src={logoUrl} alt="err" />
        </Link>
        <div className="d-flex p-tag gap-1">
          <p className="color-p-one">explore</p>
          <p className="color-p-two">plus</p>
          <img src={subURL} alt="err" className="subUrl" />
        </div>
      </div>
      <div className="border">
        {" "}
        <SearchBar />
      </div>
      <LoginButton />
    </main>
  );
}

export default Navbar;
