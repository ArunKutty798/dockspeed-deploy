import React from "react";
import Button from "../components/button";

//IMPORTING COMPONENTS

import CarDetailCard from "../components/CarDetailCard";
import { newelyMintedCars } from "../data/newlyMintedCars";
import { newelyMintedEquipments } from "../data/newlyMintedEquipments";

const NewlyMinted = ({ variant }) => {
  return (
    <div className="newlyMinted">
      <p className="text_primary_24 mb-30">
        {variant === "cars" ? "Newly minted cars" : "Newly minted equipments"}
      </p>

      <div className="newlyMinted_cards mb-30">
        {variant === "cars"
          ? newelyMintedCars.map((data, index) => (
              <CarDetailCard
                image={data.image}
                heading={data.heading}
                about={data.about}
                tokenId={data.tokenId}
                dateTime={data.dateTime}
                auction={data.auction}
                carsAvailable={data.carsAvailable}
                reserverdPrice={data.reserverdPrice}
              />
            ))
          : newelyMintedEquipments.map((data, index) => (
              <CarDetailCard
                image={data.image}
                heading={data.heading}
                about={data.about}
                tokenId={data.tokenId}
                dateTime={data.dateTime}
                auction={data.auction}
                carsAvailable={data.carsAvailable}
                reserverdPrice={data.reserverdPrice}
              />
            ))}
      </div>

      <div className="newlyMinted_button">
        <Button variant="secondary">Load More {variant === "cars" ? "Cars" : "Equipments"}</Button>
      </div>
    </div>
  );
};

export default NewlyMinted;
