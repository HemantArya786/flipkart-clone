import React from "react";
import { Link } from "react-router-dom";
import OfferSection from "./OfferSection";
import PriceAndRating from "./PriceAndRating";

function DetailSection({ offers }) {
  return (
    <main className="   ps-4 d-flex flex-column gap-3 pt-4">
      <div>
        <h6>
          HP 315 Multi-function Color Inkjet Printer (Color Page Cost: 20 Paise
          | Black Page Cost: 10 Paise) (Black, Ink Tank)
        </h6>
      </div>
      <section>
        <PriceAndRating />
      </section>

      <section className=" font-size">
        <div className="">
          <p>
            <b>Available offers</b>
          </p>
        </div>
        <div className="d-flex flex-column gap-2">
          {offers.map((item) => (
            <OfferSection detail={item} />
          ))}
        </div>

        <div className="text-primary pt-2 ps-2">
          <Link>
            <b>View 9 more offers</b>
          </Link>
        </div>
      </section>

      <div>
        <p className="font-size">
          The HP 315 multifunction colour printer is an all-in-one printer that
          helps you print, copy, and scan your documents in a convenient manner.
          Its unique transparent ink tank allows you to keep a tab on the
          quantity of ink and refill it in a hassle-free manner. To top it off,
          you can print on a number of sheet-sizes like A4, B5, A6, and more.
          Get home this energy-efficient printer and enjoy high-quality
          printing.
        </p>
      </div>
    </main>
  );
}

export default DetailSection;
