"use client";

import React, { useState, useEffect, useRef } from "react";
import { darkenColor } from "@/utils/colorUtils";
import PrivacyPolicyPopup from "./PrivacyPolicyPopup.js";

const countries = [
  { name: "India (भारत)", dial_code: "+91", flag: "🇮🇳" },
  { name: "United States", dial_code: "+1", flag: "🇺🇸" },
  { name: "Afghanistan (افغانستان)", dial_code: "+93", flag: "🇦🇫" },
  { name: "Albania (Shqipëri)", dial_code: "+355", flag: "🇦🇱" },
  { name: "Algeria (الجزائر)", dial_code: "+213", flag: "🇩🇿" },
];

const Form1 = ({ budgetOptions = [], submitButton = {}, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  const buttonStyle = {
    ...style,
    // On hover, apply a 20% darker background color; otherwise, use the default.
    backgroundColor: isHovered
      ? darkenColor(style.backgroundColor, 20)
      : style.backgroundColor,

    boxShadow: isHovered
      ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      : style.boxShadow,
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "all 0.3s ease",
  };
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="container mx-auto px-4 my-8 relative -mt-10">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
        <form className="Bannerform para-font">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent "
                placeholder="Name *"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent "
                placeholder="Email *"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center w-full border border-gray-300 rounded-lg  focus-within:border-transparent">
                {/* Country Selector Button */}
                <button
                  type="button"
                  className="flex pb-[3px] pl-4 pr-2 bg-transparent border-none  focus-visible:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-xl">{selectedCountry.flag}</span>
                </button>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  className="w-full pl-0 py-3 border-none px-2 bg-transparent rounded-r-lg "
                  placeholder="81234 56789"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {countries.map((country, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center "
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                      tabIndex={0}
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
            <div>
              <select
                className="form-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-transparent "
                required
              >
                <option value="">Budget</option>
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mt-4 px-2">
            <label className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" required />
              <span className="text-gray-700 text-sm">
                I authorize Aparna Constructions and its representative to
                contact me via email, SMS, or Call, which overrides DND/NDNC
                Registration.
                <br />
                <small
                  className="font-bold underline cursor-pointer"
                  onClick={() => setShowPrivacyPopup(true)}
                >
                  Privacy and Policy
                </small>
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="schedule-btn para-font text-lg md:text-xl mt-6"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowPopup(true)}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <PrivacyPolicyPopup
        isOpen={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
      />
    </div>
  );
};

export default Form1;

//Dont want contry code?
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { darkenColor } from "@/utils/colorUtils";
// const countries = [
//   { name: "India (भारत)", dial_code: "+91", flag: "🇮🇳" },
//   { name: "United States", dial_code: "+1", flag: "🇺🇸" },
//   { name: "Afghanistan (افغانستان)", dial_code: "+93", flag: "🇦🇫" },
//   { name: "Albania (Shqipëri)", dial_code: "+355", flag: "🇦🇱" },
//   { name: "Algeria (الجزائر)", dial_code: "+213", flag: "🇩🇿" },
// ];

// const Form1 = ({ budgetOptions = [], submitButton = {}, style }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const buttonStyle = {
//     ...style,
//     // On hover, apply a 20% darker background color; otherwise, use the default.
//     backgroundColor: isHovered
//       ? darkenColor(style.backgroundColor, 20)
//       : style.backgroundColor,

//     boxShadow: isHovered
//       ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
//       : style.boxShadow,
//     transform: isHovered ? "scale(1.05)" : "scale(1)",
//     transition: "all 0.3s ease",
//   };
//   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   return (
//     <div className="container mx-auto px-4 my-8 relative -mt-10">
//       <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
//         <form className="Bannerform para-font">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             {/* Name Field */}
//             <div>
//               <input
//                 type="text"
//                 className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none focus-visible:outline-none"
//                 placeholder="Name *"
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <input
//                 type="email"
//                 className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none focus-visible:outline-none"
//                 placeholder="Email *"
//                 required
//               />
//             </div>

//             {/* Phone Field */}
//             <div className="relative">
//               <div className="flex px-4 items-center w-full border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent">
//                 {/* Phone Number Input */}
//                 <input
//                   type="tel"
//                   className="w-full pl-0 py-3 border-none bg-transparent rounded-r-lg focus:ring-0 focus:outline-none focus-visible:outline-none"
//                   placeholder="81234 56789"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Budget Field */}
//             <div>
//               <select
//                 className="form-select w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none focus-visible:outline-none"
//                 required
//               >
//                 <option value="">Budget</option>
//                 {budgetOptions.map((option, index) => (
//                   <option key={index} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Checkbox */}
//           <div className="mt-4 px-2">
//             <label className="flex items-start space-x-2">
//               <input
//                 type="checkbox"
//                 className="mt-1 focus:outline-none focus-visible:outline-none"
//                 required
//               />
//               <span className="text-gray-700 text-sm">
//                 I authorize Aparna Constructions and its representative to
//                 contact me via email, SMS, or Call, which overrides DND/NDNC
//                 Registration.
//                 <br />
//                 <small className="font-bold underline cursor-pointer">
//                   Privacy and Policy
//                 </small>
//               </span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-6 flex justify-center">
//             <button
//               className="schedule-btn para-font text-lg md:text-xl mt-6"
//               style={buttonStyle}
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               onClick={() => setShowPopup(true)}
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form1;
