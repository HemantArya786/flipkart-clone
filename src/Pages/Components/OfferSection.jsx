import React from "react";
import { BsTagFill } from "react-icons/bs";

function OfferSection({ detail }) {
  return (
    <main className="d-flex gap-2 ps-2">
      <div>
        <BsTagFill className="text-success" />
      </div>
      <div>
        <span dangerouslySetInnerHTML={{ __html: detail }}></span>
      </div>
    </main>
  );
}

export default OfferSection;
