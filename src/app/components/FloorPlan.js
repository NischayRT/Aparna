"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

// Import the Fancybox core library and its CSS
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// --- FIX 1: Add default props to prevent TypeErrors if props are not passed
const FloorPlan = ({
  masterPlanImage = "", // Default to empty string
  floorPlans = [], // Default to empty array
  style = {},
  budgetOptions = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = useCallback(() => {
    if (!floorPlans || floorPlans.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === floorPlans.length - 1 ? 0 : prevIndex + 1
    );
  }, [floorPlans]);

  const handlePrev = useCallback(() => {
    if (!floorPlans || floorPlans.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? floorPlans.length - 1 : prevIndex - 1
    );
  }, [floorPlans]);

  useEffect(() => {
    if (!isAutoPlaying || !floorPlans || floorPlans.length <= 1) return;

    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, handleNext, floorPlans]);

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

  // --- FIX 2: Update Fancybox function to handle invalid/missing data
  const openFloorplanFullscreen = () => {
    // 1. Create a gallery array, filtering out any plans with no src
    const gallery = floorPlans
      .filter((plan) => plan && plan.src) // <-- ADDED FILTER
      .map((plan) => ({
        src: plan.src,
        caption: plan.alt,
        thumb: plan.src,
      }));

    // 2. If no valid images, do nothing
    if (gallery.length === 0) return; // <-- ADDED GUARD

    // 3. Find the new start index based on the *filtered* gallery
    const currentValidSrc = floorPlans[currentIndex]?.src;
    let newStartIndex = 0;

    if (currentValidSrc) {
      newStartIndex = gallery.findIndex((item) => item.src === currentValidSrc);
      // If the current image was invalid and got filtered out, default to 0
      if (newStartIndex === -1) {
        newStartIndex = 0;
      }
    }

    // 4. Show the Fancybox gallery, starting at the re-calculated index
    NativeFancybox.show(gallery, {
      startIndex: newStartIndex, // <-- Use new re-calculated index
      Navigation: true,
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "prev",
            "next",
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
          ],
          right: ["slideshow", "thumbs", "close"],
        },
      },
    });
  };

  // --- FIX 3: Update Masterplan function to guard against missing src
  const openMasterplanFullscreen = () => {
    // Add a guard in case masterPlanImage is null or empty
    if (!masterPlanImage) return; // <-- ADDED GUARD

    NativeFancybox.show(
      [
        {
          src: masterPlanImage,
          caption: "Project Masterplan",
          thumb: masterPlanImage,
        },
      ],
      {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: [
              "zoomIn",
              "zoomOut",
              "toggle1to1",
              "rotateCCW",
              "rotateCW",
            ],
            right: ["close"],
          },
        },
      }
    );
  };

  return (
    <>
      <section className="floor-plan bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
            {/* Master Plan Card */}
            <div className="border border-gray-200 p-6  bg-white shadow-sm h-full flex flex-col">
              <h2 className="heading-font text-center text-3xl  text-gray-800 mb-6">
                Project Masterplan
              </h2>
              {/* --- FIX 4: Conditionally render Master Plan Image --- */}
              {/* Only render if masterPlanImage is a valid string */}
              {masterPlanImage ? (
                <div
                  className="relative w-full aspect-[4/3] min-h-[400px] mt-auto cursor-zoom-in"
                  onClick={openMasterplanFullscreen}
                >
                  <Image
                    src={masterPlanImage}
                    alt="Project Masterplan"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : (
                // Optional: Show a placeholder if no image
                <div className="relative w-full aspect-[4/3] min-h-[400px] mt-auto flex items-center justify-center text-gray-500">
                  Masterplan not available.
                </div>
              )}
            </div>

            {/* Floor Plans Carousel Card */}
            <div className="border border-gray-200 p-6  bg-white shadow-sm h-full flex flex-col">
              <h2 className="text-center text-3xl  text-gray-800 mb-6 heading-font">
                Apartment Floor Plans
              </h2>
              {/* --- FIX 5: Conditionally render Floor Plans Carousel --- */}
              {floorPlans.length > 0 ? (
                <>
                  <div
                    className="relative w-full aspect-[4/3] min-h-[400px] rounded-lg overflow-hidden border border-gray-200 mt-auto cursor-zoom-in"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    onClick={openFloorplanFullscreen}
                  >
                    {floorPlans.map(
                      (plan, index) =>
                        // Add a guard to only render if plan and plan.src are valid
                        plan && plan.src ? (
                          <Image
                            key={plan.id || plan.src || index} // Use a more robust key
                            src={plan.src}
                            alt={plan.alt || "Apartment Floor Plan"} // Add alt fallback
                            fill
                            className={`object-contain transition-opacity duration-700 ease-in-out ${
                              index === currentIndex
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={index < 2}
                          />
                        ) : null // Don't render an <Image> if src is bad
                    )}
                  </div>
                  {/* Carousel Controls */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="..."
                      aria-label="Previous Plan"
                    >
                      {/* SVG */}
                    </button>
                    <div className="...">
                      <span>{String(currentIndex + 1).padStart(2, "0")}</span> /{" "}
                      <span>{String(floorPlans.length).padStart(2, "0")}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="..."
                      aria-label="Next Plan"
                    >
                      {/* SVG */}
                    </button>
                  </div>
                </>
              ) : (
                // Optional: Show a placeholder if no floor plans
                <div className="relative w-full aspect-[4/3] min-h-[400px] mt-auto flex items-center justify-center text-gray-500">
                  Floor plans not available.
                </div>
              )}
            </div>
          </div>
          {/* View More Button (Unchanged) */}
          <div className="mt-12 text-center">
            <button
              className="schedule-btn para-font text-lg md:text-xl"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowPopup(true)}
            >
              VIEW MORE
            </button>
          </div>
        </div>
        {/* Popup Form (Unchanged) */}
        <PopupForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          budgetOptions={budgetOptions}
        />
      </section>
    </>
  );
};

export default FloorPlan;
