import React from "react";

function ProductPage({ image }) {
  return (
    <main>
      <section className="d-flex container ">
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
        <div className="col-7 border  ps-4">
          <h4>
            HP 315 Multi-function Color Inkjet Printer (Color Page Cost: 20
            Paise | Black Page Cost: 10 Paise) (Black, Ink Tank)
          </h4>
          <div className="d-flex">
            <span>4.5*</span>
            <p>1,993 Ratings & 208 Reviews</p>
          </div>
          <div className="d-flex gap-1">
            <h3>10944</h3>
            <span className="">13099</span>
            <span>26% off</span>
          </div>
          <p>
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
