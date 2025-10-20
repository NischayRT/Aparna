"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";

// --- UPDATED: Reusable Fullscreen component ---
// --- UPDATED: Reusable Fullscreen component ---
const FullscreenImage = ({ src, alt, onClose, onNext, onPrev }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Move useEffect before the early return
  useEffect(() => {
    setIsZoomed(false);
  }, [src]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Rest of the component remains the same */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-light bg-black/40 rounded-full w-12 h-12 flex items-center justify-center leading-none hover:bg-black/60 transition z-20"
        aria-label="Close image"
      >
        &times;
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 rounded-full shadow-md hover:bg-white/50 transition"
          aria-label="Previous"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30 rounded-full shadow-md hover:bg-white/50 transition"
          aria-label="Next"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      <div
        className="relative w-[90vw] h-[90vh] flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full h-full transition-transform duration-300 ease-in-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className={isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
          />
        </div>
      </div>
    </div>
  );
};

const FloorPlan = ({ masterPlanImage, floorPlans, style, budgetOptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // CHANGE: Added separate state for each fullscreen view
  const [showFloorplanFullscreen, setShowFloorplanFullscreen] = useState(false);
  const [showMasterplanFullscreen, setShowMasterplanFullscreen] =
    useState(false);

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
    // Timer pauses if either fullscreen view is open
    const isFullscreenOpen =
      showFloorplanFullscreen || showMasterplanFullscreen;
    if (
      !isAutoPlaying ||
      isFullscreenOpen ||
      !floorPlans ||
      floorPlans.length <= 1
    )
      return;

    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [
    isAutoPlaying,
    currentIndex,
    handleNext,
    showFloorplanFullscreen,
    showMasterplanFullscreen,
    floorPlans,
  ]);

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

  // Handlers for each view
  const openFloorplanFullscreen = () => setShowFloorplanFullscreen(true);
  const closeFloorplanFullscreen = () => setShowFloorplanFullscreen(false);
  const openMasterplanFullscreen = () => setShowMasterplanFullscreen(true);
  const closeMasterplanFullscreen = () => setShowMasterplanFullscreen(false);

  return (
    <>
      <section className="floor-plan bg-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
            {/* Master Plan Card */}
            <div className="border border-gray-200 p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col">
              <h2 className="heading-font text-center text-3xl font-bold text-gray-800 mb-6">
                Project Masterplan
              </h2>
              {/* CHANGE: Added onClick and cursor */}
              <div
                className="relative w-full aspect-[4/3] min-h-[400px] mt-auto cursor-zoom-in"
                onClick={openMasterplanFullscreen}
              >
                <Image
                  src={masterPlanImage}
                  alt="Project Masterplan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Floor Plans Carousel Card */}
            <div className="border border-gray-200 p-6 rounded-2xl bg-white shadow-sm h-full flex flex-col">
              <h2 className="text-center text-3xl font-bold text-gray-800 mb-6 heading-font">
                Apartment Floor Plans
              </h2>
              <div
                className="relative w-full aspect-[4/3] min-h-[400px] rounded-lg overflow-hidden border border-gray-200 mt-auto cursor-zoom-in"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onClick={openFloorplanFullscreen}
              >
                {floorPlans.map((plan, index) => (
                  <Image
                    key={plan.src}
                    src={plan.src}
                    alt={plan.alt}
                    fill
                    className={`object-contain transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition"
                  aria-label="Previous Plan"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <div className="para-font text-xl font-bold text-gray-800 tabular-nums">
                  <span>{String(currentIndex + 1).padStart(2, "0")}</span> /{" "}
                  <span>{String(floorPlans.length).padStart(2, "0")}</span>
                </div>
                <button
                  onClick={handleNext}
                  className="p-2 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 transition"
                  aria-label="Next Plan"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
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
        <PopupForm
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          budgetOptions={budgetOptions}
        />
      </section>

      {/* Conditionally render the fullscreen view for the FLOOR PLAN */}
      {showFloorplanFullscreen && (
        <FullscreenImage
          src={floorPlans[currentIndex]?.src}
          alt={floorPlans[currentIndex]?.alt}
          onClose={closeFloorplanFullscreen}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* Conditionally render the fullscreen view for the MASTER PLAN */}
      {showMasterplanFullscreen && (
        <FullscreenImage
          src={masterPlanImage}
          alt="Project Masterplan"
          onClose={closeMasterplanFullscreen}
          // No onNext or onPrev props are passed
        />
      )}
    </>
  );
};

export default FloorPlan;
