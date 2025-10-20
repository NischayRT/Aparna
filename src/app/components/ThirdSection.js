"use client";

import Image from "next/image";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
import { useState } from "react";

const ThirdSection = ({ amenities, style, budgetOptions }) => {
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
    <div className="third-section bg-[#f2f7ff] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-gray-800">
            Amenities
          </h2>
          <div className="brown-underline w-20 h-1 bg-red-800 mx-auto mt-4 mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 para-font">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Image
                  src={amenity.icon}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  className="mx-auto w-24 h-24 object-contain"
                />
              </div>
              <p className="pt-3 text-sm text-gray-700 font-medium">
                {amenity.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="schedule-btn para-font text-lg md:text-xl mt-6"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowPopup(true)}
          >
            VIEW MORE
          </button>
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

export default ThirdSection;
