import React from "react";
import Image from "next/image";

const MarketPlaceCard = ({ image, heading, about }) => {
  return (
    <div style={{background:"#121212", padding:"44px 20px"}}>
      <Image
        src={image}
        alt={heading}
        height="24px"
        width="24px"
      />
      <p className="text_primary_16  mb-15 mt-20">{heading}</p>
      <p className="text_secondary_14_w400">{about}</p>
    </div>
  );
};

export default MarketPlaceCard;
