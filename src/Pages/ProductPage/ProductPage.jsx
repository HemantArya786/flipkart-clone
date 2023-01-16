import React, { useState } from "react";
import "./ProductPage.css";

import ImageSection from "../Components/ImageSection";
import DetailSection from "../Components/DetailSection";

function ProductPage() {
  const offersData = [
    "<b>Special Price </b>Get extra 25% off (price inclusive of cashback/coupon)T&C",
    "<b>Partner Offer </b>Buy this product and get upto ₹250 off on Flipkart FurnitureKnow More",
    "<b>Partner Offer</b> Purchase now & get a surprise cashback coupon for January / February 2023",
    "<b>Bank Offer </b>10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
  ];

  const [offers, setOffers] = useState(offersData);

  return (
    <main className="d-flex vh-100 container ">
      <section className="col-5">
        <ImageSection />
      </section>
      <section className="col-7">
        <DetailSection offers={offers} />
      </section>
    </main>
  );
}

export default ProductPage;
