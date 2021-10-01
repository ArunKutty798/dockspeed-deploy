import React from "react";
import Image from "next/image";

const SliderArrows = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <Image src="/icons/left.svg" alt="icon" width={24} height={24} />
    </button>
  );
};

export default SliderArrows;
