"use client";
import React, { useState, useEffect, useRef } from "react";
import { darkenColor } from "@/utils/colorUtils";
import Image from "next/image";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup.js";

const countries = [
  { name: "India", dial_code: "+91", code: "in" },
  { name: "United States", dial_code: "+1", code: "us" },
  { name: "United Kingdom", dial_code: "+44", code: "gb" },
  { name: "Canada", dial_code: "+1", code: "ca" },
  { name: "Australia", dial_code: "+61", code: "au" },
  { name: "Germany", dial_code: "+49", code: "de" },
  { name: "France", dial_code: "+33", code: "fr" },
  { name: "Singapore", dial_code: "+65", code: "sg" },
  { name: "United Arab Emirates", dial_code: "+971", code: "ae" },
  { name: "Saudi Arabia", dial_code: "+966", code: "sa" },
  { name: "Qatar", dial_code: "+974", code: "qa" },
  { name: "Kuwait", dial_code: "+965", code: "kw" },
  { name: "Oman", dial_code: "+968", code: "om" },
  { name: "Bahrain", dial_code: "+973", code: "bh" },
  { name: "Nepal", dial_code: "+977", code: "np" },
  { name: "Bangladesh", dial_code: "+880", code: "bd" },
  { name: "Sri Lanka", dial_code: "+94", code: "lk" },
  { name: "Pakistan", dial_code: "+92", code: "pk" },
  { name: "Malaysia", dial_code: "+60", code: "my" },
  { name: "Indonesia", dial_code: "+62", code: "id" },
  { name: "Thailand", dial_code: "+66", code: "th" },
  { name: "Philippines", dial_code: "+63", code: "ph" },
  { name: "Vietnam", dial_code: "+84", code: "vn" },
  { name: "Japan", dial_code: "+81", code: "jp" },
  { name: "South Korea", dial_code: "+82", code: "kr" },
  { name: "China", dial_code: "+86", code: "cn" },
  { name: "South Africa", dial_code: "+27", code: "za" },
  { name: "New Zealand", dial_code: "+64", code: "nz" },
  { name: "Italy", dial_code: "+39", code: "it" },
  { name: "Spain", dial_code: "+34", code: "es" },
  { name: "Switzerland", dial_code: "+41", code: "ch" },
  { name: "Netherlands", dial_code: "+31", code: "nl" },
  { name: "Russia", dial_code: "+7", code: "ru" },
  { name: "Brazil", dial_code: "+55", code: "br" },
  { name: "Mexico", dial_code: "+52", code: "mx" },
  { name: "Nigeria", dial_code: "+234", code: "ng" },
  { name: "Egypt", dial_code: "+20", code: "eg" },
  { name: "Turkey", dial_code: "+90", code: "tr" },
];

const Form2 = ({ src, style, address, p1, p2, budgetOptions = [], style1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const buttonStyle = {
    ...style,
    backgroundColor: isHovered
      ? darkenColor(style.backgroundColor, 20)
      : style.backgroundColor,
    boxShadow: isHovered
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : style.boxShadow,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="form-section bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT — Enquiry Form */}
          <div className="enquiry-card p-6 md:p-8 bg-blue-50  shadow-lg">
            <h2 className="heading-font text-center lg:text-left text-3xl  text-gray-800 mb-4">
              ENQUIRY FORM
            </h2>
            <div
              className="brown-underline h-1 mb-6"
              style={{ backgroundColor: style1?.color }}
            ></div>

            <p className="para-font text-center lg:text-left text-gray-700 mb-8">
              Learn more about {p2}.
            </p>

            <form className="contact-form para-font space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[#e63946] focus:border-transparent
                  focus-visible:outline-none active:ring-2 active:ring-[#e63946]
                  transition-all duration-300 ease-in-out"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[#e63946] focus:border-transparent
                  focus-visible:outline-none active:ring-2 active:ring-[#e63946]
                  transition-all duration-300 ease-in-out"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone*
                </label>
                <div className="relative" ref={dropdownRef}>
                  <div
                    className="flex items-center w-full border border-gray-300 rounded-lg
                    focus-within:ring-2 focus-within:ring-[#e63946]
                    focus-within:border-transparent transition-all duration-300 ease-in-out"
                  >
                    <button
                      type="button"
                      className="flex items-center pl-2 pr-1 bg-transparent border-none outline-none"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {/* --- REPLACED 1 --- */}
                      <Image
                        src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                        alt={selectedCountry.name}
                        className="w-6 h-4 object-cover rounded-sm"
                        width={24}
                        height={16}
                      />
                      <span className="ml-1 text-sm text-gray-600">
                        {selectedCountry.dial_code}
                      </span>
                    </button>
                    <input
                      type="tel"
                      className="w-full pl-4 py-3 border-none bg-transparent rounded-r-lg
                      focus:ring-0 outline-none focus-visible:outline-none"
                      placeholder="81234 56789"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>

                  {isDropdownOpen && (
                    <ul
                      className="absolute z-[9999] w-full mt-1 bg-white border border-gray-300 
                      rounded-lg shadow-lg max-h-60 overflow-y-auto"
                    >
                      {countries.map((country, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {/* --- REPLACED 2 --- */}
                          <Image
                            src={`https://flagcdn.com/w20/${country.code}.png`}
                            alt={country.name}
                            className="w-6 h-4 object-cover"
                            width={24}
                            height={16}
                          />
                          <span className="ml-3 text-sm">
                            {country.name} ({country.dial_code})
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Budget*
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[#e63946] focus:border-transparent
                  focus-visible:outline-none active:ring-2 active:ring-[#e63946]
                  transition-all duration-300 ease-in-out"
                  required
                >
                  <option value="">Select Budget*</option>
                  {budgetOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Checkbox */}
              <div className="form-check">
                <label className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    className="mt-1 accent-[#e63946] focus:ring-2 focus:ring-[#e63946] 
                    focus-visible:outline-none transition-all duration-300 ease-in-out"
                    required
                  />
                  <span className="text-gray-700 text-sm">
                    I authorize Aparna Constructions and its representative to
                    contact me via email, SMS, or Call, which overrides DND/NDNC
                    Registration.
                    <br />
                  </span>
                </label>

                <small
                  className=" underline cursor-pointer text-[#e63946] hover:text-[#b91c1c] transition-colors"
                  onClick={() => setShowPrivacyPopup(true)}
                >
                  Privacy and Policy
                </small>
              </div>

              {/* Submit */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="schedule-btn para-font text-lg md:text-xl mt-6"
                  style={buttonStyle}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  SCHEDULE A SITE VISIT
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT — Logo + Address + Map */}
          <div className="flex flex-col h-full">
            <div className="text-center mb-4">
              <Image
                src={src}
                alt="Project Logo"
                width={200}
                height={60}
                className="mx-auto"
              />
              <p className="mt-2 text-sm font-semibold text-gray-800">{p1}</p>
            </div>

            <div className="flex-grow overflow-hidden shadow-lg min-h-[400px] ">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Popup */}
      <PrivacyPolicyPopup
        isOpen={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
      />
    </section>
  );
};

export default Form2;
