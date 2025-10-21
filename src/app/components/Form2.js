"use client";
import React, { useState } from "react";
import { darkenColor } from "@/utils/colorUtils";
import Image from "next/image"; // Make sure Image is imported

const Form2 = ({ src, style, address, p1, p2, budgetOptions, style1 }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  // --- CHANGE: Updated zoom level from 17 to 14 to zoom out ---
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  // --- FIX: Create a valid style object for the underline from the passed prop ---
  const underlineStyle = {
    backgroundColor: style1?.color,
  };

  return (
    <section className="form-section bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Enquiry Form (Left Column) */}
          <div className="enquiry-card p-6 md:p-8 bg-blue-50">
            <h2 className="heading-font text-center lg:text-left text-3xl font-bold text-gray-800 mb-6">
              ENQUIRY FORM
            </h2>

            {/* --- FIX: Applied the corrected style object --- */}
            <div className="brown-underline h-1 bg-red-800 my-4 lg:my-6"></div>
            <p className="para-font text-center lg:text-left text-gray-700 mb-8">
              Learn more about {p2}.
            </p>
            <form className="contact-form para-font space-y-6">
              <div>
                <label className="form-label block text-gray-700 font-medium mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="form-label block text-gray-700 font-medium mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="form-label block text-gray-700 font-medium mb-2">
                  Phone*
                </label>
                <input
                  type="tel"
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label className="form-label block text-gray-700 font-medium mb-2">
                  Budget*
                </label>
                <select
                  className="form-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
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
              <div className="form-check">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" required />
                  <span className="text-gray-700 text-sm">
                    I authorize Aparna Constructions and its representative to
                    contact me via email, SMS, or Call, which overrides DND/NDNC
                    Registration.
                    <br />
                    <small className="font-bold underline cursor-pointer">
                      Privacy and Policy
                    </small>
                  </span>
                </label>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button
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

          {/* Right Column with stacked logo, text, and map */}
          <div className="flex flex-col h-full">
            <div className="text-center mb-4">
              <Image
                src={src}
                alt="Aparna Sarovar Towers Logo"
                width={200}
                height={60}
                className="mx-auto"
              />
              <p className="mt-2 text-sm font-semibold text-gray-800">{p1}</p>
            </div>

            <div className="flex-grow overflow-hidden shadow-lg min-h-[400px]">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map of Aparna Sarovar Towers"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form2;
