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
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-lg py-0" : "py-1"
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
              width={135}
              height={140}
              // FIXED: Use mobile-first classes. w-[95px] is default, md:w-[135px] is for larger.
              // h-auto maintains the aspect ratio defined by the width/height props.
              className="w-[95px] h-auto md:w-[135px]"
              priority
            />
          </div>

          {/* Right Section — Permission Card + Project Logo */}
          <div className="flex ml-auto items-center gap-2 md:gap-6">
            {/* Permission Card */}
            <div className="border border-gray-300 px-1 md:px-4 flex flex-col text-left h-[52px] md:h-auto">
              <small className="text-gray-600 mb-0 md:mb-1 text-[8px] md:text-xs">
                Building Permission No.
              </small>
              <small className="font-bold border-b border-gray-300 text-[8px] md:text-xs">
                {perm_no}
              </small>
              <small className="font-bold border-b border-gray-300 text-[8px] md:text-xs">
                TG RERA NO: {rera_no}
              </small>
              <small className="text-gray-600 text-[8px] md:text-xs">
                www.rera.telangana.gov.in
              </small>
            </div>

            {/* Project Logo */}
            {src && (
              <div>
                <Image
                  src={src}
                  alt="Aparna Sarovar Towers Logo"
                  width={140}
                  height={45}
                  // FIXED: Mobile-first classes and h-auto to maintain aspect ratio.
                  // h-fill is not a valid Tailwind class.
                  className="transition-transform duration-300 w-[80px] h-auto md:w-[140px]"
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
