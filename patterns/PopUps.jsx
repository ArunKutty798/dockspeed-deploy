import React from "react";
import PopupCard from "../components/PopupCard";

const PopUps = ({ variant, setInitialState }) => {
  const renderOnboard = (
    <PopupCard
      heading="Let us know who you are"
      about="Dockspeed is one of the world’s first multi player racing game of Defi + NFTs based on Etherium (ETH). To get the most out of this platform, select a persona that fits you. You can always switch between the personas at anytime."
      checkValue1="gamer"
      checkValue2="investor"
      subCardHead1="I’m a gamer"
      subCardHead2="I’m an investor"
      subCardAbout1="I am here to race against your opponent & win real money in crypto, buy limited edition cars on presale, upgrade my car powers with equipments from garage"
      subCardAbout2="I want to be an early holder, and witness a breakout ROI, collect rare and exotic cars in presale & sell on auction. Dedicated roadmap, audited code & envisioned team"
      subCardImg1="/imGamer.svg"
      subCardImg2="/imInvestor.svg"
      setInitialState={setInitialState}
    />
  );

  const renderLaunch = (
    <PopupCard
      heading="One last step before launch"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque est blandit sodales pharetra. Commodo luctus habitant eros bibendum pellentesque ac libero, suspendisse. Non ac lacus praesent dignissim quam. "
      checkValue1="marketplace"
      checkValue2="playGame"
      subCardHead1="I going to Marketplace"
      subCardHead2="I want to play Game"
      subCardAbout1="If you don't have a car or want to upgrade car powers, this is the place where you
      can buy newly minted assets from the direct presale."
      subCardAbout2="If you already have purchased a car, equipped powers, this is the place where you
      can beat your opponents. Start racing now."
      subCardImg1="/playGames.svg"
      subCardImg2="/toMarketPlace.svg"
      variant="launch"
      setInitialState={setInitialState}
    />
  );

  return <>{variant === "onboard" ? renderOnboard : renderLaunch}</>;
};

export default PopUps;
