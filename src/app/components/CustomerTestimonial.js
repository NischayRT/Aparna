"use client";
import React, { useState } from "react"; // Re-imported useState
import PopupForm from "./PopupForm"; // Re-imported PopupForm

/**
 * A component to display a customer testimonial video.
 * @param {object} props - The component props.
 * @param {string} props.videoSrc - The full embed URL for the YouTube video.
 * @param {object} props.buttonStyle - The inline style object for the button.
 * @param {Array | object} props.budgetOptions - The budget options for the popup form.
 */
const CustomerTestimonial = ({
  videoSrc,
  buttonStyle = {},
  budgetOptions = [], // Re-added budgetOptions prop
}) => {
  const [showPopup, setShowPopup] = useState(false); // Re-added state

  // The entire component will return null if videoSrc is not provided.
  if (!videoSrc) {
    return null;
  }

  return (
    <>
      {/* UPDATED: Changed background color and padding */}
      <section
        className="customer-testmonial py-12 md:py-16"
        style={{ backgroundColor: "#3a5a40" }}
      >
        <div className="container mx-auto px-4 py-lg-5 py-2 text-center">
          {/* UPDATED: Changed text color */}
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-center text-gray-100">
            Customer Testimonials
          </h2>
          {/* UPDATED: Changed text color */}
          <p className="mt-3 text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Here’s what people are saying about our 3 BHK apartments in
            Gopanpally-Gachibowli.
          </p>

          {/* Video Container - This is already set up to be responsive and match the picture's layout */}
          <div className="video-container mt-5 md:mt-8 max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden">
            {/* Responsive Aspect Ratio Box 
              UPDATED: Replaced Tailwind aspect-ratio plugin classes with a more robust, plugin-free approach
              using relative padding-top to enforce a 16:9 ratio.
            */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              {/* 9 / 16 = 0.5625 */}
              <iframe
                width="100%"
                height="100%"
                src={videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Button Container */}
        <div className="text-center mt-4">
          <button
            className="schedule-btn para-font text-lg md:text-xl"
            type="button"
            style={buttonStyle} // Apply the dynamic style prop here
            onClick={() => setShowPopup(true)} // Re-enabled onClick handler
          >
            WATCH MORE
          </button>
        </div>
      </section>

      {/* Re-added PopupForm */}
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default CustomerTestimonial;
