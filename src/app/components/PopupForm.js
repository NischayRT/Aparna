"use client";

import React, { useState, useEffect, useRef } from "react";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup";

const countries = [
  { name: "India (भारत)", dial_code: "+91", flag: "🇮🇳" },
  { name: "United States", dial_code: "+1", flag: "🇺🇸" },
  { name: "Afghanistan (افغانستان)", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania (Shqipëri)", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria (الجزائر)", dial_code: "+213", flag: "🇩🇿" },
];

const PopupForm = ({ isOpen, onClose, budgetOptions = [] }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  // 🧩 Prevent background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // 🧩 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Popup form submitted");
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* 🟢 Popup Overlay */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto relative animate-fadeIn">
          {/* Header */}
          <div className="bg-[#0071BA] text-white p-6 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Schedule a Site Visit</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center focus:outline-none"
              >
                ×
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              {/* Name Field */}
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] focus:border-transparent outline-none"
                placeholder="Name *"
                required
                name="name"
              />

              {/* Email Field */}
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] focus:border-transparent outline-none"
                placeholder="Email *"
                required
                name="email"
              />

              {/* Phone Field */}
              <div className="relative" ref={dropdownRef}>
                <div className="flex items-center w-full border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#0071BA] focus-within:border-transparent">
                  <button
                    type="button"
                    className="flex items-center px-3 bg-transparent border-none outline-none"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="text-xl">{selectedCountry.flag}</span>
                  </button>
                  <input
                    type="tel"
                    className="w-full pl-0 py-3 border-none bg-transparent rounded-r-lg focus:ring-0 outline-none"
                    placeholder="81234 56789"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {isDropdownOpen && (
                  <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {countries.map((country, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="ml-3 text-sm">
                          {country.name} {country.dial_code}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Budget Field */}
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] focus:border-transparent outline-none"
                required
                name="budget"
              >
                <option value="">Select Budget</option>
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Checkbox */}
            <div className="mt-6">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" required />
                <span className="text-gray-700 text-sm">
                  I authorize Aparna Constructions and its representative to
                  contact me via email, SMS, or Call, which overrides DND/NDNC
                  Registration.
                  <br />
                  <small
                    className="font-bold underline cursor-pointer hover:text-[#0071BA] transition"
                    onClick={() => setShowPrivacyPopup(true)}
                  >
                    Privacy and Policy
                  </small>
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#0071BA] text-white rounded-lg hover:bg-[#005a94] transition-colors font-semibold"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>

      <PrivacyPolicyPopup
        isOpen={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
      />
    </>
  );
};

export default PopupForm;
