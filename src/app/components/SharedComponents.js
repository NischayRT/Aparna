"use client";

import React, { useState, useEffect, useRef } from "react";

// A more comprehensive list of countries for the dropdown.
export const countries = [
  { name: "India", code: "IN", dial_code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Japan", code: "JP", dial_code: "+81", flag: "🇯🇵" },
  { name: "China", code: "CN", dial_code: "+86", flag: "🇨🇳" },
  { name: "Brazil", code: "BR", dial_code: "+55", flag: "🇧🇷" },
  { name: "South Africa", code: "ZA", dial_code: "+27", flag: "🇿🇦" },
  { name: "Afghanistan", code: "AF", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial_code: "+213", flag: "🇩🇿" },
];

/**
 * A custom phone number input with an integrated country code selector dropdown.
 */
export const PhoneNumberInput = ({
  country,
  onCountryChange,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown on clicks outside the component
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelectCountry = (country) => {
    onCountryChange(country);
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    // Allow only digits
    onChange(event.target.value.replace(/\D/g, ""));
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div className="form-input flex items-center w-full px-0 py-0 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent">
        {/* Country Selector Button */}
        <div className="w-1/4 relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-center rounded-l-lg hover:bg-gray-50"
          >
            <span className="text-lg">{country.flag}</span>
          </button>
        </div>

        {/* Separator */}
        <div className="w-px bg-gray-200"></div>

        {/* Phone Number Input */}
        <div className="flex items-center w-3/4 ">
          <span className="text-gray-500 text-sm">{country.dial_code}</span>
          <input
            type="tel"
            value={value}
            onChange={handleInputChange}
            placeholder="Phone *"
            className="w-full border-none pl-1 focus:ring-0 bg-transparent text-sm"
            required
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 max-h-60 overflow-y-auto">
          <ul className="py-1">
            {countries.map((c) => (
              <li
                key={c.code}
                onClick={() => handleSelectCountry(c)}
                className="px-4  hover:bg-gray-100 cursor-pointer flex items-center"
              >
                <span className="text-xl mr-3">{c.flag}</span>
                <span className="text-sm">
                  {c.name} ({c.dial_code})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/**
 * Shared Form Component that can be used in Form1, Form2, and Popup
 */
export const SharedForm = ({
  variant = "default",
  title = "ENQUIRY FORM",
  description = "Learn more about Aparna Sarovar 3, & 4 BHK apartments for sale in Nallagandla, Hyderabad.",
  showMap = false,
  submitButtonText = "SUBMIT",
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      phone: selectedCountry.dial_code + phoneNumber,
      budget,
    });
  };

  const getFormBackground = () => {
    switch (variant) {
      case "banner":
        return "bg-white shadow-xl border border-gray-100";
      case "enquiry":
        return "bg-blue-50";
      case "popup":
        return "bg-gradient-to-br from-white to-blue-50 shadow-2xl";
      default:
        return "bg-white";
    }
  };

  const getButtonStyle = () => {
    return "px-8 py-3 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold hover:shadow-lg transition-all duration-300 w-full md:w-auto";
  };

  return (
    <div className={`p-6 md:p-8 rounded-2xl ${getFormBackground()}`}>
      {(variant === "enquiry" || variant === "popup") && (
        <>
          <h2 className="heading-font text-center lg:text-left text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h2>
          <div className="brown-underline w-20 h-1 bg-red-800 mb-6"></div>
        </>
      )}

      {description && (
        <p className="para-font text-center lg:text-left text-gray-700 mb-8">
          {description}
        </p>
      )}

      <form onSubmit={handleSubmit} className="para-font">
        <div
          className={`grid grid-cols-1 ${
            variant === "banner" ? "md:grid-cols-4" : "md:grid-cols-1"
          } gap-4`}
        >
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Name *"
              required
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Email *"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <PhoneNumberInput
              country={selectedCountry}
              onCountryChange={setSelectedCountry}
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>

          <div>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="form-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            >
              <option value="">Budget</option>
              <option value="3 Cr - 4 Cr">3 Cr - 4 Cr</option>
              <option value="4 Cr - 5 Cr">4 Cr - 5 Cr</option>
              <option value="5 Cr - 6 Cr">5 Cr - 6 Cr</option>
              <option value="More than 6 Cr">More than 6 Cr</option>
            </select>
          </div>
        </div>

        <div className="mt-4 px-2">
          <label className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" required />
            <span className="text-gray-700 text-sm">
              I authorize Aparna Constructions and its representative to contact
              me via email, SMS, or Call, which overrides DND/NDNC Registration.
              <br />
              <small className="font-bold underline cursor-pointer">
                Privacy and Policy
              </small>
            </span>
          </label>
        </div>

        <div className="mt-6 flex justify-center">
          <button type="submit" className={getButtonStyle()}>
            {submitButtonText}
          </button>
        </div>
      </form>

      {showMap && (
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="bg-gray-100 rounded-2xl p-8 text-center h-full flex flex-col justify-center">
            <h3 className="heading-font text-2xl font-bold text-gray-800 mb-4">
              Location Map
            </h3>
            <p className="para-font text-gray-700 mb-6">
              Apartments for Sale in Nallagandla
            </p>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-600">Google Maps Embed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
