"use client";

import { useState } from "react";
import PopupForm from "./PopupForm"; // Assuming a popup form component exists
import { darkenColor } from "@/utils/colorUtils";
const StickyCTA = ({ budgetOptions, style }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    ...style,
    backgroundColor: isHovered
      ? darkenColor(style?.backgroundColor, 20)
      : style?.backgroundColor,
    boxShadow: isHovered
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : style?.boxShadow,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };
  return (
    <>
      <div className="hidden lg:block fixed top-1/2 right-0 z-40 transform -translate-y-1/2 -rotate-90 origin-bottom-right">
        <button
          className="schedule-btn sticky-cta para-font text-lg px-8 py-3 rounded-lg font-semibold"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowPopup(true)}
        >
          SCHEDULE A VISIT
        </button>
      </div>

      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default StickyCTA;
