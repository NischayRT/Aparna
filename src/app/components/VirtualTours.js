"use client";

import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

// NEW: Component to render Virtual Tour videos
const VirtualTours = ({ virtualTours, style, budgetOptions, style1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const { title, videos = [] } = virtualTours || {};

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

  // If no videos, don't render the component
  if (videos.length === 0) {
    return null;
  }

  return (
    <section className="virtual-tours bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="heading-font text-3xl md:text-4xl text-gray-800">
            {title || "Virtual Tours"}
          </h2>
          <div
            className="brown-underline w-20 h-1 mx-auto mt-4 mb-8"
            style={style1}
          ></div>
        </div>

        <div
          className={`grid grid-cols-1 ${
            videos.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"
          } gap-8 max-w-5xl mx-auto`}
        >
          {videos.map((video, index) => (
            <div key={index}>
              <p className="para-font text-center font-semibold text-lg text-gray-700 mb-3">
                {video.title}
              </p>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={video.src}
                  title={video.title || "YouTube video player"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="schedule-btn para-font text-lg md:text-xl"
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setShowPopup(true)}
          >
            SCHEDULE A SITE VISIT
          </button>
        </div>
      </div>
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </section>
  );
};

export default VirtualTours;
