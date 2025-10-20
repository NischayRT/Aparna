"use client";

import { useState } from "react";
import PopupForm from "./PopupForm"; // Assuming a popup form component exists

const StickyCTA = (style) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* --- CHANGE: The container is now positioned and transformed to be a vertical tab --- */}
      <div className="hidden lg:block fixed top-1/2 right-0 z-40 transform -translate-y-1/2 -rotate-90 origin-bottom-right">
        <button
          className="bg-gradient-to-r text-white px-6 py-3 rounded-t-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-sm uppercase tracking-wide hover:scale-105"
          onClick={() => setShowPopup(true)} // Use state to open the popup
        >
          Schedule a visit
        </button>
      </div>

      {/* This assumes you have a PopupForm component that can be toggled */}
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default StickyCTA;
