"use client";

import { useState } from "react";
import Image from "next/image";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
const Hero = ({
  h1_name1,
  h1_name2,
  p1,
  p2_1,
  p2_2,
  p3,
  style,
  budgetOptions = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const buttonStyle = {
    ...style,
    // On hover, apply a 20% darker background color; otherwise, use the default.
    backgroundColor: isHovered
      ? darkenColor(style.backgroundColor, 20)
      : style.backgroundColor,

    boxShadow: isHovered
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : style.boxShadow,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <section className="hero-section relative pl-4 pb-4y">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero.jpg"
            alt="Aparna Sarovar Towers Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Content */}
        <div className="container hero-content mx-auto py-12 relative z-10">
          <div className="heading-location ">
            {/* CHANGE: Reduced base font size from text-3xl to text-2xl */}
            <h1 className="heading-font font-bolder max-sm:text-2xl text-3xl md:pt-6 md:text-4xl lg:text-6xl text-white leading-tight drop-shadow-lg ">
              {h1_name1} <br className="hidden md:block" />
              {h1_name2}
            </h1>
            {/* CHANGE: Reduced base font size from text-xl to text-lg and fixed typo py:4 to py-4 */}
            <p className="para-font text-lg md:text-2xl py-4 lg:text-xl text-white  mb-md-5 mb-2 mt-4 drop-shadow-lg">
              {p1}
            </p>
          </div>

          {/* CHANGE: Reduced base font size from text-lg to text-base */}
          <p className="location para-font font-semibold text-base md:text-l text-white mb-4 drop-shadow-lg mt-4 max-w-fit sm:w-[50%]">
            {p2_1}
            <br />
            {p2_2}
          </p>

          <div className="mb-6">
            {/* CHANGE: Reduced base font size from text-lg to text-base */}
            <p className="para-font font-semibold text-base md:text-xl text-white drop-shadow-lg">
              {p3}
            </p>
          </div>

          <div>
            <button
              className="schedule-btn para-font text-lg md:text-xl mt-6"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowPopup(true)}
            >
              SCHEDULE A VISIT
            </button>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default Hero;
