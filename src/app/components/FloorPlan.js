"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// --- UPDATED: Renamed galleryData to avoid confusion, added title ---
const FloorPlan = ({
  title = "Floor Plans", // NEW: Title prop
  style,
  budgetOptions = [],
  galleryData = {}, // Renamed from floorPlans
  style1,
}) => {
  // --- NEW: All logic below is copied from Gallery.js for tabbing ---
  const isGalleryObject =
    galleryData &&
    typeof galleryData === "object" &&
    !Array.isArray(galleryData) &&
    Object.keys(galleryData).length > 0;

  const galleryCategories = isGalleryObject ? Object.keys(galleryData) : [];

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
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState(firstValidCategory);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  const currentImages = React.useMemo(() => {
    if (isGalleryObject) {
      return activeCategory &&
        galleryData[activeCategory] &&
        Array.isArray(galleryData[activeCategory])
        ? galleryData[activeCategory]
        : [];
    }
    return Array.isArray(galleryData) ? galleryData : [];
  }, [galleryData, isGalleryObject, activeCategory]);

  const currentImageCount = currentImages.length;

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

  useEffect(() => {
    if (currentImageCount === 0) {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
      return;
    }
    if (!scrollRef.current || !itemRefs.current[currentIndex]) {
      if (scrollRef.current && currentIndex === 0) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
      return;
    }
    const container = scrollRef.current;
    const item = itemRefs.current[currentIndex];
    if (!item) return;
    const containerCenter = container.clientWidth / 2;
    const itemCenter = item.offsetLeft + item.clientWidth / 2;
    const scrollLeft = itemCenter - containerCenter;
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [currentIndex, activeCategory, currentImageCount]);

  useEffect(() => {
    if (!isAutoPlaying || !currentImages || currentImageCount <= 1) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [
    currentIndex,
    isAutoPlaying,
    handleNext,
    currentImages,
    currentImageCount,
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

  const openGalleryFullscreen = (index) => {
    const gallery = currentImages
      .filter((item) => item && item.src)
      .map((item) => ({
        src: item.src,
        caption: item.caption || "",
        thumb: item.src,
      }));

    if (gallery.length === 0) return;

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

  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      setCurrentIndex(0);
      itemRefs.current = [];
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
      }
    }
  };

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

  const hasValidData = isGalleryObject
    ? galleryCategories.some(
        (cat) =>
          galleryData[cat] &&
          Array.isArray(galleryData[cat]) &&
          galleryData[cat].length > 0
      )
    : Array.isArray(galleryData) && galleryData.length > 0;

  if (!hasValidData) {
    return null; // Don't render if no data
  }
  // --- End of logic from Gallery.js ---

  return (
    <>
      {/* --- UPDATED: This whole section is now structured like Gallery.js --- */}
      <div className="gallery-section bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="heading-font text-4xl md:text-5xl text-gray-800">
              {title}
            </h2>
            <div className="w-20 h-1 mx-auto my-3" style={style1}></div>

            {isGalleryObject && galleryCategories.length > 1 && (
              <div className="flex justify-center flex-wrap gap-2 mb-8">
                {galleryCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`Gallery-toggle-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-in-out border
                    ${
                      activeCategory === category
                        ? "text-white border-transparent shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                    }`}
                    style={
                      activeCategory === category
                        ? style1
                        : { borderColor: style1?.backgroundColor || "#A0522D" }
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
                    onClick={() => openGalleryFullscreen(index)}
                    aria-label={
                      item.caption ||
                      `${activeCategory || "Gallery"} image ${index + 1}`
                    }
                  >
                    <div
                      className={`relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 ease-out ${
                        index === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-60 group-hover:opacity-80"
                      }`}
                    >
                      {item.src ? (
                        <Image
                          src={item.src}
                          alt={
                            item.caption ||
                            `${activeCategory || "Gallery"} image ${index + 1}`
                          }
                          fill
                          className="object-contain" // Use object-contain for floor plans
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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition disabled:opacity-50"
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
            <h3 className="text-xl font-semibold text-gray-800">
              {currentImages[currentIndex]?.caption || ""}
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
              GET A QUOTE
            </button>
          </div>
        </div>
      </div>

      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </>
  );
};

export default FloorPlan;
