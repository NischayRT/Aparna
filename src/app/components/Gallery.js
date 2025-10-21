"use client";

import Image from "next/image";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
import { useState, useEffect, useCallback, useRef } from "react";

// --- UPDATED: Reusable Fullscreen component with navigation and zoom ---
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-light bg-black/40 rounded-full w-12 h-12 flex items-center justify-center leading-none hover:bg-black/60 transition z-20"
        aria-label="Close image"
      >
        &times;
      </button>

      {/* Navigation Buttons (conditionally rendered) */}
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
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/30  shadow-md hover:bg-white/50 transition"
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

      {/* Image container that handles zoom */}
      <div
        className="relative w-[90vw] h-[90vh] flex items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the container
      >
        <div
          className={`relative w-full h-full transition-transform duration-300 ease-in-out ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          onClick={() => setIsZoomed(!isZoomed)} // Toggle zoom on click
        >
          {/* --- FIXED: Updated next/image props --- */}
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-contain ${
              isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ style, budgetOptions = [], galleryData = [], style1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullscreen, setShowFullscreen] = useState(false);

  // --- NEW: Refs for scrolling ---
  const scrollRef = useRef(null); // Ref for the scroll container
  const itemRefs = useRef([]); // Ref to hold all item elements

  const handleNext = useCallback(() => {
    if (galleryData.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
    );
  }, [galleryData.length]);

  const handlePrev = useCallback(() => {
    if (galleryData.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
    );
  }, [galleryData.length]);

  // --- NEW: useEffect to handle scrolling ---
  // This effect runs when currentIndex changes and scrolls the container
  useEffect(() => {
    if (
      !scrollRef.current ||
      !itemRefs.current[currentIndex] ||
      galleryData.length === 0
    )
      return;

    const container = scrollRef.current;
    const item = itemRefs.current[currentIndex];

    // Calculate the position to center the item
    const containerCenter = container.clientWidth / 2;
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const scrollLeft = itemCenter - containerCenter;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [currentIndex, galleryData.length]); // Runs when currentIndex changes

  // Auto-scroll effect, now pauses when fullscreen
  useEffect(() => {
    if (!isAutoPlaying || showFullscreen || galleryData.length <= 1) return;
    const interval = setInterval(handleNext, 2000);
    return () => clearInterval(interval);
  }, [
    currentIndex,
    isAutoPlaying,
    showFullscreen,
    handleNext,
    galleryData.length,
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

  // --- FIXED: openFullscreen now accepts an index ---
  const openFullscreen = (index) => {
    setCurrentIndex(index);
    setShowFullscreen(true);
  };
  const closeFullscreen = () => setShowFullscreen(false);

  if (galleryData.length === 0) {
    return null; // Don't render anything if there are no images
  }

  return (
    <>
      <div className="gallery-section bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-800">
              Gallery
            </h2>
            <div className="w-20 h-1 mx-auto " style={style1}></div>
          </div>

          <div
            className="relative w-full flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* --- FIXED: Replaced transform logic with CSS Scroll Snap container --- */}
            <div
              ref={scrollRef}
              className="flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth"
              // This padding helps center the first and last items
              style={{ padding: "0 calc(50% - clamp(250px, 40vw, 500px) / 2)" }}
            >
              {galleryData.map((item, index) => (
                <div
                  ref={(el) => (itemRefs.current[index] = el)} // Add item ref
                  key={index}
                  className="relative flex-shrink-0 mx-2 md:mx-4 snap-center" // Add snap-center
                  style={{ width: "clamp(250px, 40vw, 500px)" }}
                >
                  <button
                    onClick={() => openFullscreen(index)} // --- FIXED: Pass index here
                    className="w-full cursor-zoom-in group"
                    aria-label="View image in fullscreen"
                  >
                    <div
                      className={`relative w-full aspect-[4/3] overflow-hidden shadow-lg transform transition-all duration-500 ease-out ${
                        index === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-60 group-hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-[2px] shadow-md hover:bg-white transition"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
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
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-[2px] shadow-md hover:bg-white transition"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
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

          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {galleryData[currentIndex]?.caption}
            </h3>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <button
              className="schedule-btn para-font text-lg px-8 py-3 rounded-lg font-semibold"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowPopup(true)}
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>

      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />

      {/* Conditionally render the fullscreen view for the Gallery */}
      {showFullscreen && (
        <FullscreenImage
          src={galleryData[currentIndex]?.src}
          alt={galleryData[currentIndex]?.caption}
          onClose={closeFullscreen}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default Gallery;
