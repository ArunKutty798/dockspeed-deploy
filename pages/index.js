import Head from "next/head";
import Footer from "../components/footer";

import { nftMarketplace } from "../data/marketPlace";
import MarketPlaceCard from "../components/MarketPlaceCard";
import NewlyMinted from "../patterns/NewlyMinted";
import HeroSlider from "../patterns/heroSlider";
import Header from "../components/Header";

import Button from "../components/button";
import BuyDockCard from "../components/BuyDockCard";
import PopUps from "../patterns/PopUps";
import { useEffect, useState } from "react";

export default function Home() {
  const [initialState, setInitialState] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("category");
    if (data) setInitialState(false);
    else setInitialState(true);
  }, []);

  const renderWhyPreferUs = (
    <div className="preferUs">
      <div>
        <p className="text_primary_32 mb-20">
          Why gamers prefer us as their go to NFT racing platform
        </p>
        <p className="text_secondary_14_w400  mb-20">
          Dockspeed is one of the world’s first multi player racing game of Defi
          + NFTs based on Etherium(ETH), with more than 1000 of auto parts
          waiting for you to collect and level up. Diversified matches like
          arena and exploration and plunder system, enhance the game experience.
          Also through the daily match, player can earn match bonus and get ETH{" "}
        </p>
        <Button variant="secondary">Play Game</Button>
      </div>
      <div>
        <img src="/preferUs.svg" alt="preferus" />
      </div>
    </div>
  );

  const renderWhyUs = (
    <div className="whyUs">
      {nftMarketplace.map((data, index) => (
        <MarketPlaceCard
          key={index}
          image={data.image}
          heading={data.heading}
          about={data.about}
        />
      ))}
    </div>
  );

  const renderFastestGrowing = (
    <div className="fastestGrowing">
      <div>
        <p className="mb-30 text_primary_32">
          World’s fastest growing cryptocurrency
        </p>
      </div>
      <div className="fastestGrowing_mainGrid">
        <div className="fastestGrowing_subGrid1">
          <div>
            <p className="mb-20 text_primary_32">
              Buy Dockspeed token, start racing and earn interests
            </p>
            <p className="text_secondary_14_w400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
              curabitur imperdietut. Ornare tortor ut id nulla nunc, consectetur
              elementum. Tristique sit tincidunt nisi ridiculus imperdiet nulla
              curabitur.
            </p>
          </div>
          <img src="/fastestGrowing.png" alt="fastestGrowing" />
        </div>
        <div className="fastestGrowing_subGrid2">
          <div>
            <p className="mb-10">500,000,000,000</p>
            <p>Total Supply</p>
            <img src="/graph.svg" alt="graph" />
          </div>
          <div>
            <p className="mb-10">2%</p>
            <p>Tokens Burnt</p>
            <img src="/graph.svg" alt="graph" />
          </div>
          <div>
            <p className="mb-10">2%</p>
            <p>Distributed to Holders</p>
            <img src="/graph.svg" alt="graph" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderBuyDock = (
    <div className="buyDock">
      <div className="buyDock_head mb-30">
        <div>
          <p className="mb-20 text_primary_32">Buy your $DOCK</p>
          <p className="text_secondary_14_w400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero
            curabitur imperdietut. Ornare tortor ut id nulla nunc, consectetur
            elementum. Tristique sit tincidunt nisi ridiculus imperdiet nulla
            curabitur.
          </p>
        </div>
      </div>
      <div className="buyDock_card">
        <BuyDockCard
          title="Buy"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero curabitur imperdietut. "
          amount="0000.00000 BNB"
          value="~ 0.00 USD"
        />
        <BuyDockCard
          title="Sell"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero curabitur imperdietut. "
          amount="0000.00000 BNB"
          value="~ 0.00 USD"
        />
        <BuyDockCard
          title="Transfer"
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero curabitur imperdietut. "
        />
      </div>
    </div>
  );

  const renderContact = (
    <div className="contactUs">
      <div>
        <p className="mb-15 text_primary_18">Contract Address</p>
        <p className="text_secondary_14_w400 mb-10">
          0x66cB2D528A3380Bd919245D8812b45B03D421Ce5
        </p>
        <p className="text_secondary_14_w400">
          It has been running for 126 days and 12 hours.
        </p>
      </div>
      <div>
        <p className="mb-15 text_primary_18">Raffle Address</p>
        <p className="text_secondary_14_w400 mb-10">
          0x66cB2D528A3380Bd919245D8812b45B03D421Ce5
        </p>
        <p className="text_label_14_w400 pointer">
          Send 1 DOCK to Raffle{" "}
          <img src="/icons/arrowRs.svg" alt="arrow" className="ml-10" />
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Dock Speed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroSlider />

      <div className="home">
        {/* {renderPopUps} */}
        {renderWhyPreferUs}
        {renderWhyUs}
        <NewlyMinted variant="cars" />
        <NewlyMinted />
        {renderFastestGrowing}
        {renderBuyDock}
        {renderContact}
      </div>
      <Footer />
      {initialState && (
        <PopUps variant="onboard" setInitialState={setInitialState} />
      )}
    </>
  );
}
