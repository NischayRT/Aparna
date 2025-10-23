"use client";

import { useState, useEffect } from "react";
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
  const [navHeight, setNavHeight] = useState(0);

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

  // Dynamically read navbar height
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) setNavHeight(navbar.offsetHeight);
  }, []);

  // ✅ Dynamic CSS for desktop and mobile image sizing
  const bgStyles = `
    .hero-bg-dynamic {
      background-image: url('${desktopBg}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: top center;
      width: 100%;
      aspect-ratio: 4496 / 2546; /* Desktop image ratio */
    }

    @media (max-width: 768px) {
      .hero-bg-dynamic {
        background-image: url('${mobileBg}');
        background-size: contain; /* ✅ SHOW FULL IMAGE */
        background-repeat: no-repeat;
        background-position: top center;
        width: 100%;
        aspect-ratio: 390 / 840; /* ✅ Mobile image ratio */
        height: auto; /* ✅ Let it grow naturally */
      }
    }
  `;

  return (
    <>
      <style>{bgStyles}</style>

      <section
        className="hero-section relative"
        style={{
          marginTop: `${navHeight - 50}px`, // starts after navbar
        }}
      >
        {/* Background Layer */}
        <div className="hero-bg-dynamic w-full relative z-0"></div>

        {/* Text + Button Overlay */}
        <div className="container hero-content absolute inset-0 flex flex-col justify-center items-start z-10">
          <div className="heading-location">
            <h1 className="heading-font max-sm:text-2xl text-3xl md:pt-6 md:text-4xl lg:text-6xl text-white leading-tight drop-shadow-lg">
              {h1_name1} <br className="hidden md:block" />
              {h1_name2}
            </h1>
            <p className="para-font text-lg md:text-2xl py-4 lg:text-xl text-white mb-md-5 mb-2 mt-4 drop-shadow-lg">
              {p1}
            </p>
          </div>

          {p2_1 && (
            <p className="location para-font font-semibold text-base md:text-l text-white mb-4 drop-shadow-lg mt-4 max-w-fit sm:w-[50%]">
              {p2_1}
              <br />
              {p2_2}
            </p>
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

      {/* Popup */}
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default Hero;
