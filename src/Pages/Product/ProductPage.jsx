import React, { useState } from "react";
import "./ProductPage.css";

import ImageSection from "../Components/ImageSection";
import DetailSection from "../Components/DetailSection";

function ProductPage() {
  const offersData = [
    {
      title: "Zod Runner V3 Running Shoes For Men  (Black)",
      price: { min: 999, max: 3999 },
      Color: "Black",
      image: [
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/w/t/k/9-380815-9-puma-black-silver-original-imaghreeykjygnqa.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/n/z/9-380815-9-puma-black-silver-original-imaghreezukuhmfh.jpeg?q=70",
        "https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/x/h/x/9-380815-9-puma-black-silver-original-imaghreemhgghwqp.jpeg?q=70",
      ],
    },
    "<b>Special Price </b>Get extra 25% off (price inclusive of cashback/coupon)T&C",
    "<b>Partner Offer </b>Buy this product and get upto ₹250 off on Flipkart FurnitureKnow More",
    "<b>Partner Offer</b> Purchase now & get a surprise cashback coupon for January / February 2023",
    "<b>Bank Offer </b>10% off on Citi Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹5,000 and above",
  ];

  const [offers, setOffers] = useState(offersData);

  return (
    <main className="d-flex vh-100 container mt-2 ">
      <section className="col-sm-5">
        <ImageSection image={offers} />
      </section>
      <section className="col-sm-7">
        <DetailSection offers={offers} />
      </section>
    </main>
  );
}

export default ProductPage;
