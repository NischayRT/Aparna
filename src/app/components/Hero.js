"use client";

import { useState } from "react";
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
  desktopBg,
  mobileBg,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const buttonStyle = {
    ...style,
    backgroundColor: isHovered
      ? darkenColor(style.backgroundColor, 20)
      : style.backgroundColor,
    boxShadow: isHovered
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : style.boxShadow,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };

  // Define dynamic styles for background images
  const bgStyles = `
    .hero-bg-dynamic {
      background-image: url('${desktopBg}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    @media (max-width: 768px) {
      .hero-bg-dynamic {
        background-image: url('${mobileBg}');
      }
    }
  `;

  return (
    <>
      {/* Inject the dynamic styles into the component */}
      <style>{bgStyles}</style>

      <section className="hero-section relative pl-4 pb-4y">
        {/* Background Image */}
        {/* Apply the dynamic class */}
        <div className="absolute inset-0 z-0 hero-bg-dynamic">
          {/* Dark overlay for better text readability (optional) */}
          {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        </div>

        {/* Content */}
        <div className="container hero-content mx-auto py-12 relative z-10">
          <div className="heading-location ">
            <h1 className="heading-font er max-sm:text-2xl text-3xl md:pt-6 md:text-4xl lg:text-6xl text-white leading-tight drop-shadow-lg ">
              {h1_name1} <br className="hidden md:block" />
              {h1_name2}
            </h1>
            <p className="para-font text-lg md:text-2xl py-4 lg:text-xl text-white  mb-md-5 mb-2 mt-4 drop-shadow-lg">
              {p1}
            </p>
          </div>
          {p2_1 && (
            <>
              <p className="location para-font font-semibold text-base md:text-l text-white mb-4 drop-shadow-lg mt-4 max-w-fit sm:w-[50%]">
                {p2_1}
                <br />
                {p2_2}
              </p>
            </>
          )}

          {p3 && (
            <>
              <div className="mb-6">
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
            </>
          )}
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
