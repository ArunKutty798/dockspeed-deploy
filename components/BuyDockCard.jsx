import React from "react";
import Button from "./button";
import Input from "./Input";

const BuyDockCard = ({ title, about, amount, value }) => {
  return (
    <div className="buyDockCard">
      <p className="mb-15 text_primary_18">{title} {title === "Buy" || title === "Sell" ? "DOCK" : "Token"}</p>
      <p className="mb-20 text_secondary_14_w400_v3">{about}</p>
      {title === "Buy" || title === "Sell" ? (
        <div>
          <Input placeholder="Amount of KARMA" inputDockspeedIcon="/icons/dockSpeedInput.svg"/>
          <p className="mb-15 text_primary_16_w400_regular">{title} Price</p>
          <p className="mb-10 text_secondary_14_w400_v3">{amount}</p>
          <p className="mb-20 text_secondary_14_w400_v3">{value}</p>
          <Button>{title} DOCK</Button>
        </div>
      ) : (
        <div>
          <Input placeholder="Address" />
          <Input placeholder="Amount of KARMA" inputDockspeedIcon="/icons/dockSpeedInput.svg" />
          <p className="mb-20 text_secondary_14_w400_v3">
            A transfer token fee of 15% to the amount of KARMA will be charged.
          </p>
          <Button>Transfer Token</Button>
        </div>
      )}
    </div>
  );
};

export default BuyDockCard;
