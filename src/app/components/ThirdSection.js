"use client";

import Image from "next/image";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
import React, { useState, useEffect } from "react"; // NEW: Import React features

const ThirdSection = ({ amenities, style, budgetOptions, style1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // --- NEW: Logic for tabs, copied from Gallery.js ---
  const isAmenitiesObject =
    amenities &&
    typeof amenities === "object" &&
    !Array.isArray(amenities) &&
    Object.keys(amenities).length > 0;

  const amenityCategories = isAmenitiesObject ? Object.keys(amenities) : [];

  const firstValidCategory = isAmenitiesObject
    ? amenityCategories.find(
        (cat) =>
          amenities[cat] &&
          Array.isArray(amenities[cat]) &&
          amenities[cat].length > 0
      ) ||
      amenityCategories[0] ||
      null
    : null;

  const [activeCategory, setActiveCategory] = useState(firstValidCategory);

  const currentAmenities = React.useMemo(() => {
    if (isAmenitiesObject) {
      return activeCategory &&
        amenities[activeCategory] &&
        Array.isArray(amenities[activeCategory])
        ? amenities[activeCategory]
        : [];
    }
    return Array.isArray(amenities) ? amenities : [];
  }, [amenities, isAmenitiesObject, activeCategory]);

  useEffect(() => {
    if (
      isAmenitiesObject &&
      (!activeCategory ||
        !amenities[activeCategory] ||
        amenities[activeCategory].length === 0)
    ) {
      const firstValid = amenityCategories.find(
        (cat) =>
          amenities[cat] &&
          Array.isArray(amenities[cat]) &&
          amenities[cat].length > 0
      );
      if (firstValid) {
        setActiveCategory(firstValid);
      }
    }
  }, [amenities, amenityCategories, activeCategory, isAmenitiesObject]);
  // --- End of new tab logic ---

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

  // Don't render if no amenities
  if (currentAmenities.length === 0 && !isAmenitiesObject) {
    return null;
  }

  return (
    <div className="third-section bg-[#f2f7ff] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="heading-font text-3xl md:text-4xl text-gray-800">
            Amenities
          </h2>
          <div
            className="brown-underline w-20 h-1 mx-auto mt-4 mb-8"
            style={style1}
          ></div>

          {/* --- NEW: Conditional Category Buttons --- */}
          {isAmenitiesObject && amenityCategories.length > 1 && (
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {amenityCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`Gallery-toggle-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border
                    ${
                      activeCategory === category
                        ? "text-white border-transparent shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                    }`}
                  style={
                    activeCategory === category
                      ? style1
                      : { borderColor: style1?.backgroundColor || "#A0522D" }
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- UPDATED: Grid now uses currentAmenities --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 para-font">
          {currentAmenities.map((amenity, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <Image
                  src={amenity.icon}
                  alt={amenity.name}
                  width={100}
                  height={100}
                  className="mx-auto w-24 h-24 object-contain"
                  unoptimized={true} // Add if icons are SVGs or external URLs
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
