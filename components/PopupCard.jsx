import React from "react";
import Input from "./Input";

const PopupCard = ({
  variant,
  checkValue1,
  checkValue2,
  heading,
  about,
  subCardHead1,
  subCardHead2,
  subCardAbout1,
  subCardAbout2,
  subCardImg1,
  subCardImg2,
}) => {
  return (
    <div className="popupCard backdrop modal">
      <img src="/racingTag.svg" alt="racingTag" className="popupCard_tag" />
      <p className="mb-15 text_primary_24 ">{heading}</p>
      <p className="mb-20 text_secondary_14_w400">{about}</p>
      <div className="popupCard_subCards">
        <div>
          <img src={subCardImg1} alt={subCardHead1} />
          <Input
            type="checkbox"
            value={checkValue1}
            onChange={(event) => {
              {
                variant === "launch"
                  ? localStorage.setItem("goingTo", `${checkValue1}`)
                  : localStorage.setItem("youAre", `${checkValue1}`);
              }
            }}
          />
          <p className="mb-15 text_primary_16_w400">{subCardHead1}</p>
          <p className="text_secondary_12_w400">{subCardAbout1}</p>
          <p className="mt-15 text_label_14_w400">
            {variant === "launch" ? "Explore Now" : ""}
          </p>
        </div>
        <div>
          <img src={subCardImg2} alt={subCardHead2} />
          <Input
            type="checkbox"
            value={checkValue2}
            onChange={(event) => {
              {
                variant === "launch"
                  ? localStorage.setItem("goingTo", `${checkValue2}`)
                  : localStorage.setItem("youAre", `${checkValue2}`);
              }
            }}
          />
          <p className="mb-15 text_primary_16_w400">{subCardHead2}</p>
          <p className="text_secondary_12_w400">{subCardAbout2}</p>
          <p className="mt-15 text_label_14_w400">
            {variant === "launch" ? "Race Now" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
