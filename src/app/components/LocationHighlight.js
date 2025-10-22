"use client";

import Image from "next/image";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

const LocationHighlight = ({
  galleryData,
  style,
  locationData,
  budgetOptions,
  style1,
}) => {
  const [activeAccordion, setActiveAccordion] = useState("it-companies");
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

  return (
    <section className="location-highlights bg-white py-12">
      <div className="container mx-auto px-6">
        {/* --- FIXED: Changed 'lg:flex-row' to 'md:flex-row' --- */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* ===== LEFT: Location Images ===== */}
          {/* --- FIXED: Changed 'lg:w-1/2' to 'md:w-1/2' --- */}
          <div className="w-full md:w-1/2">
            {/* --- FIXED: Mobile Vertical Stack (Now 'md:hidden') --- */}
            <div className="md:hidden flex flex-col gap-4">
              {galleryData.slice(0, 3).map((img, index) => (
                <div
                  key={index}
                  className="relative w-full aspect-video overflow-hidden"
                >
                  <Image
                    src={img?.src}
                    alt={img?.caption || "Location Image"}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>

            {/* --- FIXED: Desktop Vertical Stack (Now 'hidden md:flex') --- */}
            <div className="hidden md:flex flex-col justify-between gap-4 h-[720px]">
              {/* Top Large Image */}
              <div className="relative h-[420px] bg-gray-100 overflow-hidden ">
                <Image
                  src={galleryData[0]?.src}
                  alt={galleryData[0]?.caption || "Location Image"}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Bottom Two Images */}
              <div className="grid grid-cols-2 gap-4 h-[290px] max-md:block flex">
                <div className="relative bg-gray-100 overflow-hidden ">
                  <Image
                    src={galleryData[1]?.src}
                    alt={galleryData[1]?.caption || "Location Image"}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative bg-gray-100 overflow-hidden ">
                  <Image
                    src={galleryData[2]?.src}
                    alt={galleryData[2]?.caption || "Location Image"}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: Location Details ===== */}
          {/* --- FIXED: Changed 'lg:w-1/2' to 'md:w-1/2' --- */}
          <div className="w-full md:w-1/2 flex flex-col justify-between min-h-[600px]">
            <div>
              {/* --- FIXED: Changed 'lg:text-left' to 'md:text-left' --- */}
              <h2 className="heading-font text-center md:text-left text-3xl  text-gray-800">
                Location Highlights
              </h2>
              <p className="para-font font-bold text-black mt-4">
                1 Minute Walk to Aparna Neo Mall & Multiplex
              </p>
              <p className="para-font text-black mt-2">
                Distances and ETAs are approx as per Google Maps
              </p>
              {/* --- FIXED: Changed 'lg:mx-0' to 'md:mx-0' --- */}
              <div
                className="brown-underline w-20 h-1 my-6 mx-auto md:mx-0"
                style={style1}
              ></div>

              {/* Accordion (No changes needed) */}
              <div className="space-y-4">
                {Object.entries(locationData).map(([key, items]) => (
                  <div
                    key={key}
                    className="border border-gray-200  overflow-hidden"
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
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule Button */}
            {/* --- FIXED: Changed 'lg:justify-start' to 'md:justify-start' --- */}
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
