import React, { useState } from "react";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import dataSlider from "../data/dataSlider";

// import SliderArrows from "../components/sliderArrows";

const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const renderNftDetails = (
    <div className="details_block">
      <div className="content">
        <p
          className="text_primary_24"
          style={{ fontSize: "2.6em", lineHeight: "40px" }}
        >
          Lamborgini Hurracan
        </p>
        <p className="text_secondary_14_w400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan
          nibh sit malesuada ultricies suscipit nulla. Dolor facilisis vulputate
          id ultrices non etiam. Netus turpis at integer posuere eget nulla
          cursus diam pellentesque. Odio aliquam velit eget ipsum.
        </p>
        <div className="flex_start">
          <div>
            <p className="text_primary_16">Acceleration</p>
            <p className="text_label_24_w400" style={{ whiteSpace: "nowrap" }}>
              3.1s
            </p>
            <p className="text_secondary_14_w400">from 0-100 kmph</p>
          </div>
          <div>
            <p className="text_primary_16">Engine</p>
            <p className="text_label_24_w400" style={{ whiteSpace: "nowrap" }}>
              237 BHP
            </p>
            <p className="text_secondary_14_w400">best in class</p>
          </div>
          <div>
            <p className="text_primary_16">Range</p>
            <p className="text_label_24_w400" style={{ whiteSpace: "nowrap" }}>
              800 KM
            </p>
            <p className="text_secondary_14_w400">industry leading</p>
          </div>
          <div>
            <p className="text_primary_16">Safety</p>
            <div style={{ display: "flex", alignItems: "center", gridGap: 5 }}>
              <img src="/icons/star.svg" alt="star" width={20} height={20} />
              <img src="/icons/star.svg" alt="star" width={20} height={20} />
              <img src="/icons/star.svg" alt="star" width={20} height={20} />
              <img src="/icons/star.svg" alt="star" width={20} height={20} />
              <img src="/icons/star.svg" alt="star" width={20} height={20} />
            </div>
            <p className="text_secondary_14_w400">highest ratings</p>
          </div>
        </div>
        <div className="flex">
          <aside>
            <span style={{ color: "#FF2C2C" }}  className="pointer" >79.68 ETH</span>
          </aside>
          <p className="pointer">View car</p>
        </div>
      </div>
    </div>
  );

  const renderCurrentSlide = (
    <div className="current_slide">
      <div>
        <p className="current_index">0{slideIndex + 1}</p>
        <span></span>
        <p>0{dataSlider.length}</p>
      </div>
    </div>
  );

  const renderHeroSlider = (
    <div className="hero-container-slider">
      {dataSlider.slice(slideIndex, slideIndex + 1).map((obj, index) => {
        return (
          <div key={index} className={"slide active-anim"}>
            <div className="bg_image">
              <LazyLoadImage src={obj.image} alt="art" effect="blur" />
            </div>
            <div className="hero_slider_details">{renderNftDetails}</div>
          </div>
        );
      })}
    </div>
  );

  const renderCollections = (
    <div className="colloction_wrapper">
      {dataSlider.map((obj, index) => {
        return (
          <div key={index} onClick={() => setSlideIndex(index)}>
            <div className="bg_image">
              <LazyLoadImage src={obj.image} alt="art" effect="blur" />
              <p className="title">{obj.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="hero_slider">
      {renderHeroSlider}
      {renderCurrentSlide}
      {renderCollections}
    </div>
  );
};

export default HeroSlider;
