import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { exploreLinks, legalLinks } from "../data/footerLinks";
import Button from "../components/button";
import Input from "../components/Input";

const socialMediaIcons = [
  "/facebook.svg",
  "/instagram.svg",
  "/linkedin.svg",
  "/twitter.svg",
  "/slack.svg",
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [callSubscribe, setCallSubscribe] = useState(false);

  const handleSubmit = () => {
    console.log(email);
    setCallSubscribe(true);
    setEmail("");
  };

  const renderSocialIcons = (
    <div className="footer_socialIcons">
      {socialMediaIcons.map((link, index) => {
        return (
          <img
            key={index}
            src={`/icons${link}`}
            alt="icons"
            width={20}
            height={20}
          />
        );
      })}
    </div>
  );

  const renderFooterAbout = (
    <div>
      <img src={"/logoLong.svg"} alt="logo" width={200} height={70} />
      <p className="text_secondary_14_w400 mb-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        adipiscing netus amet pellentesque eget. Orci odio nulla cursus rutrum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        adipiscing netus amet pellentesque eget. Orci odio nulla cursus rutrum.{" "}
      </p>
      {renderSocialIcons}
    </div>
  );

  const renderExploreLinks = (
    <div className="links">
      <p className="mb-30 text_primary_16">Explore</p>
      {exploreLinks.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="mb-10 text_secondary_14_w400 pointer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  const renderLegalLinks = (
    <div className="links">
      <p className="mb-30 text_primary_16">Legal</p>
      {legalLinks.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="mb-10 text_secondary_14_w400 pointer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  const renderFooterLinks = (
    <div>
      {renderExploreLinks}
      {renderLegalLinks}
      <div className="singleCol">
        <p className="mb-30 text_primary_16">Subscribe to weekly newsletter</p>
        <Input
          type="email"
          placeholder="Enter email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        {callSubscribe ? (
          <p className="text_success_label_14__w400">
            Congrats on signing up for our newsletter ! You shall be receiving
            our community updates on time via your email
          </p>
        ) : (
          <Button
            variant="primary"
            style={{ width: "140px" }}
            onClick={() => handleSubmit()}
          >
            Subscribe
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="footer">
      {renderFooterAbout}
      {renderFooterLinks}
      <div className="logo_transparent">
        <Image
          src="/logopassthrough.svg"
          alt="logo"
          className="logo_transparent"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Footer;
