import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./ProductPage.css"

function ProductPage({ image }) {
  return (
    <main className="d-flex ">
      <section className="">
        <div className="col-5 border">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kb2jmvk0/printer/h/y/5/hp-315-original-imafsg2yhdh8muzp.jpeg?q=70"
            alt="err"
          />
          <div className="">
            <button className="btn btn-warning col-5 me-1">add to cart</button>
            <button className="btn btn-danger col-5">buy now</button>
          </div>
        </div>
      </section>
      <section className="col-7 border  ps-4 d-flex flex-column gap-3 pt-4">
        <h6>
          HP 315 Multi-function Color Inkjet Printer (Color Page Cost: 20 Paise
          | Black Page Cost: 10 Paise) (Black, Ink Tank)
        </h6>
        <div className="d-flex">
          <div className="border text-white  ">
            <span className=" rating d-flex align-items-center gap-1 p-1 ms-1 rating-border ">
              4.5
              <AiFillStar />
            </span>
          </div>

          <div>
            <span className="text-secondary ms-1">
              1,993 ratings & 208 Reviews
            </span>
          </div>
        </div>
        <div className="d-flex gap-1">
          <div className="border  ">
            <h3>10944</h3>
          </div>
          <div className="border align-items-center gap-1 d-flex">
            <span className="text-secondary">13099</span>
            <span className="text-success">26% off</span>
          </div>

          <div></div>
        </div>
        <div>
          <p className="font-size">
            The HP 315 multifunction colour printer is an all-in-one printer
            that helps you print, copy, and scan your documents in a convenient
            manner. Its unique transparent ink tank allows you to keep a tab on
            the quantity of ink and refill it in a hassle-free manner. To top it
            off, you can print on a number of sheet-sizes like A4, B5, A6, and
            more. Get home this energy-efficient printer and enjoy high-quality
            printing.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
