"use client";

import Image from "next/image";
// 1. Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 2. Import the specific icon you want to use
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    // The main footer container
    <footer className="footer text-white">
      {/* Blue background section */}
      <div className="bg-[#0071BA] pb-4 lg:pb-0">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Info - Aligns left on mobile, end on desktop */}
            <div className="flex justify-start lg:justify-end items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 border border-white rounded-full flex items-center justify-center">
                <Image
                  src="/call-us.png"
                  alt="Call Us"
                  width={22}
                  height={22}
                />
              </div>
              <div className="phone-no para-font text-left">
                <p className="para-font mb-1 text-gray-200">Call us</p>
                <a
                  href="tel:+919154987890"
                  className="text-white font-bold para-font text-decoration-none text-lg hover:underline"
                >
                  +91 9154987890
                </a>
              </div>
            </div>

            {/* Address - Aligns left on both mobile and desktop */}
            <div className="flex justify-start items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 border border-white rounded-full flex items-center justify-center p-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl" />
              </div>
              <div className="address-label text-left">
                <p className="para-font text-white mb-2 font-semibold">
                  APARNA CONSTRUCTIONS AND ESTATES PVT LTD.
                </p>
                <p className="para-font text-gray-200 text-sm max-w-sm">
                  #802, DOOR NO: 6-3-352/2&3, Astral Heights Road No 1, Banjara
                  Hills, Hyderabad-500034 Telangana, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Black copyright section */}
      <div className="bg-black py-4 ">
        <div className="container mx-auto px-4 max-lg:pb-15">
          <p className="text-gray-400 text-center para-font text-sm">
            Copyright © 2025. Aparna Constructions And Estates Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
