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

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-lg py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex md:relative md:flex-row justify-between items-center gap-3 md:gap-6 transition-transform duration-300 ${
            isScrolled ? "scale-[0.97]" : "scale-100"
          }`}
        >
          {/* Left Section — Aparna Logo */}
          <div
            className={`flex-shrink-0 lg:absolute transition-transform duration-300 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Aparna Lead the Future"
              width={90}
              height={90}
              className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] lg:w-[135px] lg:h-[140px]"
              priority
            />
          </div>

          {/* Right Section — Permission Card + Project Logo */}
          <div className="flex ml-auto items-center gap-2 md:gap-4">
            {/* Permission Card */}
            <div className="border border-gray-300 px-2 py-1 md:px-4 md:py-2 flex flex-col text-left min-w-fit md:min-w-[200px]">
              <small className="text-[10px] sm:text-[11px] md:text-xs text-gray-600 mb-1">
                Building Permission No.
              </small>
              <small className="font-bold border-b border-gray-300 text-[10px] sm:text-[11px] md:text-xs">
                {perm_no}
              </small>
              <small className="font-bold border-b border-gray-300 text-[10px] sm:text-[11px] md:text-xs">
                TG RERA NO: {rera_no}
              </small>
              <small className="text-gray-600 text-[10px] sm:text-[11px] md:text-xs">
                www.rera.telangana.gov.in
              </small>
            </div>

            {/* Project Logo */}
            {src && (
              <div className="h-auto">
                <Image
                  src={src}
                  alt="Aparna Sarovar Towers Logo"
                  width={120}
                  height={45}
                  className="w-[100px] sm:w-[120px] md:w-[140px] transition-transform duration-300"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
