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
      <div className="md:max-w-[80%] mx-auto py-3 max-md:px-[15px] max-md:mx-0 px-4 max-sm:px-[10px]">
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
              className="md:w-[135px] md:h-[140px] max-md:w-[95px] max-md:h-[95px]"
              priority
            />
          </div>

          {/* Right Section — Permission Card + Project Logo */}
          <div className="flex ml-auto items-center gap-6">
            {/* Permission Card */}
            <div className="border border-gray-300 px-4 max-md:px-1  flex flex-col text-left max-md:h-[52px] ">
              <small className=" text-gray-600 mb-1 max-md:mb-0 max-md:text-[8px]">
                Building Permission No.
              </small>
              <small className="font-bold border-b border-gray-300 text-xs max-md:text-[8px]">
                {perm_no}
              </small>
              <small className="font-bold border-b border-gray-300 text-xs max-md:text-[8px]">
                TG RERA NO: {rera_no}
              </small>
              <small className="text-gray-600 text-xs max-md:text-[8px]">
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
                  className="transition-transform h-fill duration-300 max-md:w-[80px] max-md:h-[40px]"
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
