"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; // --- ADDED IMPORT ---
import PrivacyPolicyPopup from "./PrivacyPolicyPopup";

// 🌍 Expanded Country List with Image Flags (PNG from flagcdn.com)
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

const PopupForm = ({ isOpen, onClose, budgetOptions = [] }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  // 🧩 Prevent background scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // 🧩 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Popup form submitted");
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
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
                className="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] outline-none"
              placeholder="Name *"
              required
            />

            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] outline-none"
              placeholder="Email *"
              required
            />

            {/* Phone Field with Flag Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#0071BA]">
                <button
                  type="button"
                  className="flex items-center px-3 bg-transparent border-none outline-none"
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
                  <span className="ml-2 text-sm text-gray-600">
                    {selectedCountry.dial_code}
                  </span>
                </button>
                <input
                  type="tel"
                  className="w-full pl-2 py-3 border-none bg-transparent rounded-r-lg focus:ring-0 outline-none"
                  placeholder="81234 56789"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {isDropdownOpen && (
                <ul className="absolute z-20 w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto">
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

            {/* Budget Field */}
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0071BA] outline-none"
              required
            >
              <option value="">Select Budget</option>
              {budgetOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Checkbox */}
            <div className="mt-6">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" required />
                <span className="text-gray-700 text-sm">
                  I authorize Aparna Constructions and its representative to
                  contact me via email, SMS, or Call, which overrides DND/NDNC
                  Registration.
                  <br />
                </span>
              </label>

              <small
                className="font-bold underline cursor-pointer hover:text-[#0071BA]"
                onClick={() => setShowPrivacyPopup(true)}
              >
                Privacy and Policy
              </small>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0071BA] text-white rounded-lg hover:bg-[#005a94] font-semibold"
            >
              SUBMIT
            </button>
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
