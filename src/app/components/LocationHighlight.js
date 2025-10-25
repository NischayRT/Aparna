"use client";

import Image from "next/image";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

// --- FIX: Added default values to props ---
const LocationHighlight = ({
  galleryData = [], // Default to an empty array
  style,
  locationData = {}, // Default to an empty object
  budgetOptions,
  style1,
}) => {
  // --- FIX: Set a default active accordion key, or fallback if locationData is empty ---
  const [activeAccordion, setActiveAccordion] = useState(
    Object.keys(locationData)[0] || ""
  );
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

  // Helper to safely get images, even if galleryData is short
  const getImage = (index) => {
    return (
      galleryData[index] || {
        src: "https://placehold.co/600x400/eee/ccc?text=Image",
        caption: "Placeholder",
      }
    );
  };

  return (
    <section className="location-highlights bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* ===== LEFT: Location Images ===== */}
          <div className="w-full md:w-1/2">
            {/* Mobile Vertical Stack */}
            <div className="md:hidden flex flex-col gap-4">
              {/* --- FIX: This line is now safe thanks to the default prop --- */}
              {galleryData.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-video overflow-hidden"
                >
                  <Image
                    src={
                      img?.src ||
                      "https://placehold.co/600x400/eee/ccc?text=Image"
                    }
                    alt={img?.caption || "Location Image"}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Vertical Stack */}
            <div className="hidden md:flex flex-col justify-between gap-4 h-[720px]">
              {/* Top Large Image */}
              <div className="relative h-[420px] bg-gray-100 overflow-hidden rounded-lg">
                <Image
                  src={getImage(0).src}
                  alt={getImage(0).caption}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-4 h-[290px]">
                <div className="relative bg-gray-100 overflow-hidden rounded-lg">
                  <Image
                    src={getImage(1).src}
                    alt={getImage(1).caption}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative bg-gray-100 overflow-hidden rounded-lg">
                  <Image
                    src={getImage(2).src}
                    alt={getImage(2).caption}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Location Details ===== */}
          <div className="w-full md:w-1/2 flex flex-col justify-between min-h-[600px]">
            <div>
              <h2 className="heading-font text-center md:text-left text-3xl text-gray-800">
                Location Highlights
              </h2>
              <p className="para-font font-bold text-black mt-4">
                1 Minute Walk to Aparna Neo Mall & Multiplex
              </p>
              <p className="para-font text-black mt-2">
                Distances and ETAs are approx as per Google Maps
              </p>
              <div
                className="brown-underline w-20 h-1 my-6 mx-auto md:mx-0"
                style={style1}
              ></div>

              {/* Accordion */}
              <div className="space-y-4">
                {/* --- FIX: This line is now safe thanks to the default prop --- */}
                {Object.entries(locationData).map(([key, items]) => (
                  <div
                    key={key}
                    className="border border-gray-200 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left para-font font-semibold text-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                      onClick={() =>
                        setActiveAccordion(activeAccordion === key ? "" : key)
                      }
                    >
                      <span>
                        {key
                          .split("-")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </span>
                      <span className="text-xl font-light">
                        {activeAccordion === key ? "−" : "+"}
                      </span>
                    </button>

                    {activeAccordion === key && (
                      <div className="px-6 py-4 bg-white">
                        <ul className="para-font space-y-2">
                          {items.map((item, index) => (
                            <li
                              key={index}
                              className="text-gray-900 list-disc list-inside"
                              dangerouslySetInnerHTML={{ __html: item }}
                            ></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Button */}
            <div className="flex justify-center md:justify-start mt-8">
              <button
                className="schedule-btn para-font text-lg md:text-xl"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowPopup(true)}
              >
                SCHEDULE A CALL
              </button>
            </div>
          </div>
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

export default LocationHighlight;
