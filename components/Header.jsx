import React, { useEffect, useState } from "react";
import Button from "./button";

const Header = () => {
  const [position, setPosition] = useState(0);
  const [sidebar, setSidebar] = useState(false);

  const handleScroll = () => {
    setPosition(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderLogo = (
    <div className="logo">
      <img src={"/logoLong.svg"} alt="logo" width={200} height={40} />
    </div>
  );

  const renderSiderbar = (
    <div className={sidebar ? "sidebar active" : "sidebar"}>
      <p className="text_primary_14_w700">Home</p>
      <p className="text_secondary_14_w400">Marketplace</p>
      <p className="text_secondary_14_w400">Game</p>
      <p className="text_secondary_14_w400">Features</p>
      <p className="text_secondary_14_w400">Presales</p>
      <p className="text_secondary_14_w400">Contract</p>
    </div>
  );

  const renderMenuItems = (
    <div className="menuItems">
      <p className="text_primary_14_w700">Home</p>
      <p className="text_secondary_14_w400">Marketplace</p>
      <p className="text_secondary_14_w400">Game</p>
      <p className="text_secondary_14_w400">Features</p>
      <p className="text_secondary_14_w400">Presales</p>
      <p className="text_secondary_14_w400">Contract</p>
    </div>
  );

  const renderMenu = (
    <div className="menu">
      <Button href="/">Launch platform</Button>
      <img
          src={sidebar ? '/icons/close.svg' : '/icons/menuList.svg'}
          alt="menu"
          width={24}
          height={24}
          className="menuList cursor"
          onClick={() => setSidebar((s) => !s)}
        />
    </div>
  );
  return (
    <>
      <div className={position > 50 ? "header inactive" : "header"}>
        {renderLogo}
        {renderMenuItems}
        {renderSiderbar}
        {renderMenu}
      </div>
    </>
  );
};

export default Header;
