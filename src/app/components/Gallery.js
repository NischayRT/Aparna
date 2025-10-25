"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image"; // Re-introducing next/image
import PopupForm from "./PopupForm"; // Re-introducing PopupForm
import { darkenColor } from "@/utils/colorUtils"; // Re-introducing darkenColor
import { Fancybox as NativeFancybox } from "@fancyapps/ui"; // Re-introducing Fancybox
import "@fancyapps/ui/dist/fancybox/fancybox.css"; // Re-introducing Fancybox CSS

const DEFAULT_GALLERY_DATA = {};

const Gallery = ({
  style,
  budgetOptions = [],
  galleryData = DEFAULT_GALLERY_DATA,
  style1,
}) => {
  // --- New Logic: Check if galleryData is an object with categories or a simple array ---
  const isGalleryObject =
    galleryData &&
    typeof galleryData === "object" &&
    !Array.isArray(galleryData) &&
    Object.keys(galleryData).length > 0;

  const galleryCategories = isGalleryObject ? Object.keys(galleryData) : [];

  // Find the first category that actually has images (if it's an object)
  const firstValidCategory = isGalleryObject
    ? galleryCategories.find(
        (cat) =>
          galleryData[cat] &&
          Array.isArray(galleryData[cat]) &&
          galleryData[cat].length > 0
      ) ||
      galleryCategories[0] ||
      null
    : null;

  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Re-introducing PopupForm state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Active category is only relevant if it's a gallery object
  const [activeCategory, setActiveCategory] = useState(firstValidCategory);

  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  // --- New Logic: Determine the current image array ---
  const currentImages = React.useMemo(() => {
    if (isGalleryObject) {
      // If it's an object, get images from the active category
      return activeCategory &&
        galleryData[activeCategory] &&
        Array.isArray(galleryData[activeCategory])
        ? galleryData[activeCategory]
        : [];
    }
    // If it's an array, just use it directly
    return Array.isArray(galleryData) ? galleryData : [];
  }, [galleryData, isGalleryObject, activeCategory]);

  const currentImageCount = currentImages.length;

  // --- Handlers use currentImageCount ---
  const handleNext = useCallback(() => {
    if (currentImageCount === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === currentImageCount - 1 ? 0 : prevIndex + 1
    );
  }, [currentImageCount]);

  const handlePrev = useCallback(() => {
    if (currentImageCount === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentImageCount - 1 : prevIndex - 1
    );
  }, [currentImageCount]);

  // --- Effect for scrolling ---
  useEffect(() => {
    // If no images, reset scroll
    if (currentImageCount === 0) {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
      return;
    }
    // If refs aren't ready, scroll to start if it's the first index
    if (!scrollRef.current || !itemRefs.current[currentIndex]) {
      if (scrollRef.current && currentIndex === 0) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      return;
    }
    // Scroll to the active item
    const container = scrollRef.current;
    const item = itemRefs.current[currentIndex];
    if (!item) return;
    const containerCenter = container.clientWidth / 2;
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const scrollLeft = itemCenter - containerCenter;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [currentIndex, activeCategory, currentImageCount]); // Depend on activeCategory

  // --- Effect for auto-play ---
  useEffect(() => {
    if (!isAutoPlaying || !currentImages || currentImageCount <= 1) return;
    const interval = setInterval(handleNext, 4000); // 4-second interval
    return () => clearInterval(interval);
  }, [
    currentIndex,
    isAutoPlaying,
    handleNext,
    currentImages,
    currentImageCount,
  ]);

  // --- Button style logic (Re-introducing darkenColor) ---
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

  // --- Re-introducing Fancybox function ---
  const openGalleryFullscreen = (index) => {
    // Build the gallery from the *current* image set
    const gallery = currentImages
      .filter((item) => item && item.src)
      .map((item) => ({
        src: item.src,
        caption: item.caption || "",
        thumb: item.src, // Use main image as thumbnail
      }));

    if (gallery.length === 0) {
      console.warn("No valid images in this category for Fancybox.");
      return;
    }

    NativeFancybox.show(gallery, {
      startIndex: index,
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

  // --- Function to handle category change ---
  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setCurrentIndex(0); // Reset index
      itemRefs.current = []; // Reset item refs
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "auto" }); // Scroll to start immediately
      }
    }
  };

  // --- Adjusted initial check ---
  // Check if it's an object with valid categories OR a simple array with items
  const hasValidData = isGalleryObject
    ? galleryCategories.some(
        (cat) =>
          galleryData[cat] &&
          Array.isArray(galleryData[cat]) &&
          galleryData[cat].length > 0
      )
    : Array.isArray(galleryData) && galleryData.length > 0;

  // This effect ensures the activeCategory is valid when data is an object
  useEffect(() => {
    if (
      isGalleryObject &&
      (!activeCategory ||
        !galleryData[activeCategory] ||
        galleryData[activeCategory].length === 0)
    ) {
      const firstValidCategory = galleryCategories.find(
        (cat) =>
          galleryData[cat] &&
          Array.isArray(galleryData[cat]) &&
          galleryData[cat].length > 0
      );
      if (firstValidCategory) {
        setActiveCategory(firstValidCategory);
      }
    }
  }, [galleryData, galleryCategories, activeCategory, isGalleryObject]);

  // Don't render if no valid data at all
  if (!hasValidData) {
    return null;
  }

  // Show loading only if it's an object and the active category is still being set
  if (isGalleryObject && (!activeCategory || !galleryData[activeCategory])) {
    return <div className="text-center py-10">Loading gallery...</div>;
  }

  return (
    <>
      <div className="gallery-section bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="heading-font text-4xl md:text-5xl text-gray-800">
              Gallery
            </h2>
            <div className="w-20 h-1 mx-auto my-3" style={style1}></div>

            {/* --- Conditional Category Buttons --- */}
            {/* Show buttons only if it's an object and has more than 1 category */}
            {isGalleryObject && galleryCategories.length > 1 && (
              <div className="flex justify-center flex-wrap gap-2 mb-8">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    // Style based on user images: rounded-full, border, padding
                    className={`Gallery-toggle-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border
                    ${
                      activeCategory === category
                        ? "text-white border-transparent" // Active state
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400" // Inactive state
                    }`}
                    style={
                      activeCategory === category
                        ? style1 // Apply theme background color for active
                        : { borderColor: style1?.backgroundColor || "#A0522D" } // Fallback border color
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative w-full flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              ref={scrollRef}
              className="flex items-center overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
              style={{ padding: "0 calc(50% - clamp(250px, 40vw, 500px) / 2)" }}
            >
              {/* Map over CURRENT images */}
              {currentImages.map((item, index) => (
                <div
                  ref={(el) => {
                    if (el) itemRefs.current[index] = el;
                  }}
                  key={`${activeCategory || "default"}-${item.src || index}`}
                  className="relative flex-shrink-0 mx-2 md:mx-4 snap-center"
                  style={{ width: "clamp(250px, 40vw, 500px)" }}
                >
                  <button
                    className="w-full group cursor-zoom-in"
                    onClick={() => openGalleryFullscreen(index)} // Open Fancybox
                    aria-label={
                      item.caption ||
                      `${activeCategory || "Gallery"} image ${index + 1}`
                    }
                  >
                    <div
                      className={`relative w-full aspect-[4/3] overflow-hidden transform transition-all duration-500 ease-out ${
                        // Added rounded-lg
                        index === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-60 group-hover:opacity-80"
                      }`}
                    >
                      {item.src ? (
                        <Image // Re-introducing next/image
                          src={item.src}
                          alt={
                            item.caption ||
                            `${activeCategory || "Gallery"} image ${index + 1}`
                          }
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 500px"
                          priority={index < 3}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                          Invalid Image
                        </div>
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50" // Made round
              aria-label="Previous image"
              disabled={currentImageCount <= 1}
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50" // Made round
              aria-label="Next image"
              disabled={currentImageCount <= 1}
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

          <div className="text-center mt-4 h-6">
            {" "}
            {/* Caption */}
            <h3 className="text-xl font-semibold text-gray-800">
              {currentImages[currentIndex]?.caption || ""}
            </h3>
          </div>

          <div className="text-center mt-12 md:mt-16">
            {" "}
            {/* View More Button */}
            <button
              className="schedule-btn para-font text-lg px-8 py-3 rounded-lg font-semibold"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowPopup(true)} // Re-introducing popup
            >
              VIEW MORE
            </button>
          </div>
        </div>
      </div>

      {/* Re-introducing PopupForm component */}
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default Gallery;
