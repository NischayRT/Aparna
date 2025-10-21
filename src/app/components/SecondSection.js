"use client";

import Image from "next/image";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

const SecondSection = ({
  stats,
  h1,
  p1,
  p2,
  style1,
  style,
  src,
  budgetOptions,
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

  return (
    <div className="second-section bg-white py-12">
      <div className="container mx-auto px-4">
        {/* The parent flex container with items-stretch for equal height columns on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:text-left flex flex-col justify-center">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800">
              {h1}
            </h2>
            <div className="brown-underline h-1 bg-red-800 my-4 lg:my-6"></div>
            <p className="para-font font-semibold text-gray-700 mb-4">{p1}</p>
            <p className="para-font font-semibold text-gray-700 mb-8">{p2}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="info-box text-center p-4 border border-[#ccc] content-center"
                >
                  <span className="text-2xl font-bold block mb-2 whitespace-pre-line">
                    {stat.value}
                  </span>
                  <hr className="w-3/4 mx-auto border-gray-300 mb-2" />
                  <span className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start">
              <button
                className="schedule-btn para-font text-lg md:text-xl"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowPopup(true)}
              >
                SCHEDULE SITE VISIT
              </button>
            </div>
          </div>

          {/* ===== Right Image (with changes) ===== */}
          <div
            // CHANGE: Explicitly set height for mobile and auto for larger screens.
            className="relative lg:w-1/2 h-80 lg:h-auto min-h-[320px] shadow-lg overflow-hidden"
          >
            <Image
              src={src}
              alt="Aparna Sarovar Towers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </div>
  );
};

export default SecondSection;
