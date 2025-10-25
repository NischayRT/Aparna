"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NavBar = ({ src, rera_no, perm_no }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- NEW: Check if there is any data for the right-hand side ---
  const hasPermissionDetails = rera_no || perm_no;
  const hasProjectLogo = src;
  const showRightSide = hasPermissionDetails || hasProjectLogo;

  return (
    <nav
      className={`fixed top-0 left-0 h-[6rem] max-lg:h-[5rem] w-full z-50 bg-white shadow-lg transition-all duration-300 ${
        isScrolled ? "py-0" : "py-1"
      }`}
    >
      <div className="container">
        <div
          className={`flex justify-between items-center relative transition-transform duration-300 ${
            isScrolled ? "scale-[0.97]" : "scale-100"
          }`}
        >
          {/* Left Section — Aparna Logo */}
          <div
            className={`flex-shrink-0 absolute top-[-20px] left-0 transition-transform duration-300 ${
              isScrolled ? "scale-98" : "scale-100"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Aparna Lead the Future"
              width={125}
              height={130}
              className="w-[95px] h-auto lg:w-[130px]"
              priority
            />
          </div>

          {/* --- NEW: Conditionally render the entire right section --- */}
          {showRightSide && (
            <div className="flex ml-auto items-center gap-2 md:gap-6">
              {/* --- NEW: Conditionally render Permission Card --- */}
              {hasPermissionDetails && (
                <div className="border border-gray-300 px-1 md:px-4 flex flex-col text-left h-[52px] md:h-auto">
                  <small className="text-gray-600 mb-0 md:mb-1 text-[8px] lg:text-xs">
                    Building Permission No.
                  </small>
                  {/* Render only if perm_no exists */}
                  {perm_no && (
                    <small className="font-bold border-b border-gray-300 text-[8px] lg:text-xs">
                      {perm_no}
                    </small>
                  )}
                  {/* Render only if rera_no exists */}
                  {rera_no && (
                    <small className="font-bold border-b border-gray-300 text-[8px] lg:text-xs">
                      TG RERA NO: {rera_no}
                    </small>
                  )}
                  <small className="text-gray-600 text-[8px] lg:text-xs">
                    www.rera.telangana.gov.in
                  </small>
                </div>
              )}

              {/* --- NEW: Conditionally render Project Logo --- */}
              {hasProjectLogo && (
                <div>
                  <Image
                    src={src}
                    alt="Project Logo" // Changed alt text
                    width={140}
                    height={45}
                    className="transition-transform duration-300 w-[80px] h-auto md:w-[140px]"
                    priority
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
