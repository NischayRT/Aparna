"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
const About = ({ src, style, budgetOptions }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <section className="about-sarovar bg-[#f2f7ff] py-12">
      <div className="container mx-auto px-4">
        <h2 className="heading-font text-center text-3xl md:text-4xl font-bold text-gray-800">
          About Aparna Constructions
        </h2>
        <div className="brown-underline w-20 h-1 bg-red-800 mx-auto my-6"></div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <div className="lg:w-1/2">
            {/* --- CHANGE: YouTube Video Embed --- */}
            <div className="relative pt-[56.25%] bg-gray-100 overflow-hidden shadow-lg">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={src}
                title="Aparna Constructions - Company Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="para-font text-[#3c4854cc] mb-6 text-lg leading-relaxed">
              Since 1996, Aparna Constructions has led the way in pioneering
              innovation within gated communities. Our unwavering vision
              combines affordability with luxury, building homes that captivate
              your heart. We&apos;re committed to global standards of
              construction, with a strong sense of environmental responsibility
              evident in every home we build.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                className="schedule-btn para-font text-lg md:text-xl mt-6"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowPopup(true)}
              >
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopupForm
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        budgetOptions={budgetOptions}
      />
    </section>
  );
};

export default About;
