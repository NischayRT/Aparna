"use client";
import { useState } from "react";
import PopupForm from "./PopupForm";
import { darkenColor } from "@/utils/colorUtils";
import LiteYouTubeEmbed from "react-lite-youtube-embed"; // <-- Import
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"; // <-- Import CSS

const About = ({ src, style, budgetOptions, style1 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Extract the YouTube Video ID from the src prop
  // (e.g., "https://www.youtube.com/embed/NXMVHeQzLdo" -> "NXMVHeQzLdo")
  const videoId = src.split("/").pop().split("?")[0];

  const buttonStyle = {
    // ... (your existing button style code)
  };

  return (
    <section className="about-sarovar bg-[#f2f7ff] py-12">
      <div className="container mx-auto px-4">
        <h2 className="heading-font text-center text-3xl md:text-4xl font-bold text-gray-800">
          About Aparna Constructions
        </h2>
        <div
          className="brown-underline w-20 h-1 mx-auto my-6"
          style={style1}
        ></div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-8">
          <div className="lg:w-1/2">
            {/* --- FIXED: Lite YouTube Embed --- */}
            <div className="relative pt-[56.25%] bg-gray-100 overflow-hidden shadow-lg">
              <LiteYouTubeEmbed
                id={videoId}
                title="Aparna Constructions - Company Overview"
                wrapperClass="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="para-font text-[#3c4854cc] mb-6 text-lg leading-relaxed">
              {/* ... (your existing paragraph) */}
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                // ... (your existing button props)
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
