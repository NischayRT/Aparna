"use client";

import Image from "next/image";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

// --- UPDATED: Destructure secondarySection object ---
const SecondSection = ({ secondarySection, style1, style, budgetOptions }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // --- NEW: Destructure props from the object ---
  const { title, p1, p2, image, propertyCards = [] } = secondarySection || {};

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
        {/* Main Content (Text + Image) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:text-left flex flex-col justify-center">
            <h2 className="heading-font text-3xl md:text-4xl text-gray-800">
              {title}
            </h2>
            <div
              className="brown-underline h-1 my-4 lg:my-6"
              style={style1}
            ></div>
            <p
              className="para-font text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: p1 }}
            ></p>
            <p
              className="para-font text-gray-700 mb-8"
              dangerouslySetInnerHTML={{ __html: p2 }}
            ></p>
          </div>

          {/* Right Image */}
          <div className="relative lg:w-1/2 h-80 lg:h-auto min-h-[320px] shadow-lg overflow-hidden rounded-lg">
            {image && (
              <Image
                src={image}
                alt={title || "Project Image"}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>

        {/* --- NEW: Property Cards Section --- */}
        {propertyCards.length > 0 && (
          <div
            className={`grid grid-cols-1 ${
              propertyCards.length > 1 ? "lg:grid-cols-2" : "lg:grid-cols-1"
            } gap-8 py-5 mt-10`}
          >
            {propertyCards.map((card, index) => (
              <div
                key={index}
                className="property-card p-4 bg-gray-50 shadow-md border border-gray-200 h-full flex flex-col"
              >
                {/* Conditionally render title if there are multiple cards */}
                {propertyCards.length > 1 && (
                  <>
                    <h3 className="heading-font text-2xl text-center mb-2 text-gray-800">
                      {card.title}
                    </h3>
                    <p
                      className="para-font text-center text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{ __html: card.subtitle }}
                    ></p>
                  </>
                )}

                <div className="grid grid-cols-2 gap-4 mb-8 mt-4">
                  {card.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="info-box text-center p-[10px] border-[#ccc] content-center bg-white rounded-lg"
                    >
                      <span className="text-xl sm:text-2xl block mb-2 stats-value whitespace-pre-line">
                        {stat.value}
                      </span>
                      <hr className="w-3/4 mx-auto border-gray-300 mb-2 " />
                      <span className="text-gray-600 text-sm font-medium stats-label">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-auto">
                  <button
                    className="schedule-btn para-font text-lg md:text-xl"
                    style={buttonStyle}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setShowPopup(true)}
                  >
                    GET MORE DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
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
