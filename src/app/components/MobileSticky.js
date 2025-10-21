"use client";
import { useState, useEffect } from "react";
import PopupForm from "./PopupForm";

const MobileSticky = ({ budgetOptions }) => {
  const [showPopup, setShowPopup] = useState(false);

  // 🧩 Optional: Prevent scroll behind popup for mobile too
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showPopup]);

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-white border-t shadow-lg z-[100] md:hidden overflow-hidden">
        <div className="flex items-center justify-center py-3 px-3">
          <button
            onClick={() => setShowPopup(true)}
            className="sticky-cta w-full max-w-xs rounded-lg py-2.5 text-white font-semibold"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Popup Form Overlay */}
      {showPopup && (
        <PopupForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          budgetOptions={budgetOptions}
        />
      )}
    </>
  );
};

export default MobileSticky;
