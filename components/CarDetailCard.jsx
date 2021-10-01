import React from "react";
import Image from "next/image";

//IMPORTING COMPONENTS

import Button from "./button";

const CarDetailCard = ({
  image,
  heading,
  about,
  tokenId,
  dateTime,
  carsAvailable,
  auction,
  reserverdPrice,
}) => {
  return (
    <div className="carDetails">
      <div className="image">
        <img src={image} alt="art" />
      </div>
      <div className="carDetails_head">
        <p className="text_primary_18 mb-10">{heading}</p>
        <p className="text_secondary_14_w700">{about}</p>
        <p className="mb-15 text_primary_14_w400">{tokenId}</p>
        <div>
          <div>
            <p className="text_secondary_14_w400">Minted on</p>
            <p className="text_primary_14_w700">{dateTime}</p>
          </div>
          <div>
            <p className="text_secondary_14_w400">Cars available</p>
            <p className="text_primary_14_w700">{carsAvailable}</p>
          </div>
        </div>
        {auction && (
          <div className="carDetails_auction">
            <p className="text_secondary_14_w400">
            Reserve price
              <span className="text_label_16_w400 ml-20">{reserverdPrice}</span>
            </p>
            <Button variant="secondary" style={{ transform: "skewX(-8deg)" }}>
              <img
                src={"/icons/left.svg"}
                alt="arrow"
                width={20}
                height={20}
                className="rotate"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetailCard;
