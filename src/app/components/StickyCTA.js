"use client";

import { useState } from "react";
import PopupForm from "./PopupForm"; // Assuming a popup form component exists
import { darkenColor } from "@/utils/colorUtils";

const StickyCTA = (style) => {
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
      {/* --- CHANGE: The container is now positioned and transformed to be a vertical tab --- */}
      <div className="hidden lg:block fixed top-1/2 right-0 z-40 transform -translate-y-1/2 -rotate-90 origin-bottom-right">
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

      {/* This assumes you have a PopupForm component that can be toggled */}
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default StickyCTA;
