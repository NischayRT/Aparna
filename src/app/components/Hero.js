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

  // ✅ Check if any content is provided
  const hasContent = !!(h1_name1 || p1 || p2_1 || p3);

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
  }, [hasContent]); // Re-run if hasContent changes, though navHeight is mostly static

  // ✅ Dynamic CSS block that branches based on hasContent
  const bgStyles = `
    ${
      hasContent
        ? `
        /* --- STATE 1: HAS CONTENT --- */
        .hero-section {
          height: 100vh;
          margin-top: ${navHeight}px !important;
        }
        .hero-bg-dynamic {
          background-image: url('${desktopBg}');
          background-size: cover;
          background-position: center center; /* Crop to right on desktop */
          background-repeat: no-repeat;
          position: absolute; /* Fill the section */
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          z-index: -1; /* Behind content */
        }
        
        @media (max-width: 767px) {
          .hero-section {
            height: 100vh; /* Full height on mobile too */
            margin-top: 0 !important;
          }
          .hero-bg-dynamic {
            background-image: url('${mobileBg}');
            background-position: bottom center; /* Crop to bottom on mobile */
          }
          .hero-h1 {
             margin-top: ${navHeight}px !important; /* Push H1 down */
          }
        }
      `
        : `
        /* --- STATE 2: EMPTY (NO CONTENT) --- */
        .hero-section {
          margin-top: 3rem !important; /* No margin on top */
        }
        .hero-bg-dynamic {
          background-image: url('${desktopBg}');
          background-size: contain; /* Show full image */
          background-repeat: no-repeat;
          background-position: top center;
          width: 100%;
          aspect-ratio: 4496 / 2546; /* Desktop image ratio */
        }

        @media (max-width: 767px) {
          .hero-bg-dynamic {
            background-image: url('${mobileBg}');
            background-size: contain; /* Show full image */
            background-position: top center;
            width: 100%;
            aspect-ratio: 390 / 840; /* Mobile image ratio */
            height: auto;
          }
        }
      `
    }
  `;

  return (
    <>
      <style>{bgStyles}</style>

      {/* ✅ 'relative' is crucial for positioning children */}
      <section className="hero-section relative w-full flex flex-col overflow-hidden">
        {/* Background Layer: Classes removed, style block is in full control */}
        <div className="hero-bg-dynamic"></div>

        {/* ✅ Text + Button Overlay: Conditionally render *only* if there is content */}
        {hasContent && (
          <div className="container hero-content absolute inset-0 flex flex-wrap flex-col justify-center items-start max-md:justify-start max-md:pt-4 z-10">
            <div className="heading-location">
              {h1_name1 && (
                <h1 className="heading-font hero-h1 max-md:text-2xl text-3xl md:pt-6 lg:text-6xl text-white leading-tight drop-shadow-lg">
                  {h1_name1} <br className="hidden md:block" />
                  {h1_name2}
                </h1>
              )}
              {p1 && (
                <p className="para-font text-lg md:text-2xl py-4 lg:text-xl text-white mb-md-5 mb-2 mt-4 drop-shadow-lg">
                  {p1}
                </p>
              )}
            </div>

            {p2_1 && (
              <p className="location para-font font-semibold px-2 py-1 text-base md:text-l text-white mb-4 drop-shadow-lg mt-4 max-w-fit sm:w-[50%]">
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
        )}
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
