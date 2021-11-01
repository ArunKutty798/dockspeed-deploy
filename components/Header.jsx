import React, { useEffect, useState } from "react";
import Button from "./button";
import DownloadLink from "react-download-link";
import Link from "next/link";

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
      <Link href="/">
        <a
          className="text_primary_14_w700 pointer"
          style={{ color: "inherit" }}
        >
          Home
        </a>
      </Link>
      <Link href="/marketplace">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Marketplace
        </a>
      </Link>
      <Link href="/game" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Game
        </a>
      </Link>
      <Link href="/features" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Features
        </a>
      </Link>
      <Link href="/presales" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Presales
        </a>
      </Link>
      <Link href="/contract" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Contract
        </a>
      </Link>
      <DownloadLink
        label="Whitepaper"
        filename="/pdf/whitepaper.pdf"
        exportFile={() => "whitepaper data"}
      />
      <Link href="/">
        <>
          <Button>Launch Platform</Button>
        </>
      </Link>
    </div>
  );

  const renderMenuItems = (
    <div className="menuItems">
      <Link href="/">
        <a
          className="text_primary_14_w700 pointer"
          style={{ color: "inherit" }}
        >
          Home
        </a>
      </Link>
      <Link href="/marketplace">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Marketplace
        </a>
      </Link>
      <Link href="/game" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Game
        </a>
      </Link>
      <Link href="/features" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Features
        </a>
      </Link>
      <Link href="/presales" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Presales
        </a>
      </Link>
      <Link href="/contract" className="text_secondary_14_w400 pointer">
        <a
          className="text_secondary_14_w400 pointer "
          style={{ color: "#dbdbdb" }}
        >
          Contract
        </a>
      </Link>
    </div>
  );

  const renderMenu = (
    <div className="menu">
      <div className="menu_buttonLinks">
        <DownloadLink
          label="Whitepaper"
          filename="/pdf/whitepaper.pdf"
          exportFile={() => "whitepaper data"}
        />
        <Link href="/">
          <Button>Launch platform</Button>
        </Link>
      </div>
      <img
        src={sidebar ? "/icons/close.svg" : "/icons/menuList.svg"}
        alt="menu"
        width={24}
        height={24}
        className="menuList cursor"
        style={{ cursor: "pointer" }}
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
