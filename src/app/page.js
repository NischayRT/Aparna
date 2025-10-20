"use client";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Form1 from "./components/Form1";
import Gallery from "./components/Gallery";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FloorPlan from "./components/FloorPlan";
import About from "./components/About";
import Form2 from "./components/Form2";
import LocationHighlight from "./components/LocationHighlight";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import MobileSticky from "./components/MobileSticky";

export default function Home() {
  const Secondary_Section_Data = {
    h1: "Gated Community Flats for Sale in Nallagandla",
    p1: "Aparna Sarovar Towers is a gated community offering luxury 3 & 4 BHK apartments for sale in Nallagandla.",
    p2: "The project boasts access to Nallagandla Hi-street panoramic views of the HCU campus and cityscape, a grand 52,932 sq ft Clubhouse, and three car parks per unit.",
    stats: [
      { value: "3", label: "TOWERS" },
      { value: "G+50", label: "FLOORS" },
      { value: "3 & 4 BHK\n(+Maid Room)", label: "CONFIGURATIONS" },
      { value: "2878-3700 Sft.", label: "AREA RANGE" },
    ],
  };

  const clr = "#fe4848";
  const color = {
    color: clr,
  };
  const buttonStyle = {
    backgroundColor: clr,
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "2px",
    fontWeight: 600,
    fontSize: "medium",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  const budgetOptions = [
    { value: "3 Cr - 4 Cr", label: "3 Cr - 4 Cr" },
    { value: "4 Cr - 5 Cr", label: "4 Cr - 5 Cr" },
    { value: "5 Cr - 6 Cr", label: "5 Cr - 6 Cr" },
    { value: "More than 6 Cr", label: "More than 6 Cr" },
  ];

  const Form1_btn = {
    submitButton: {
      text: "SUBMIT",
      className:
        "px-8 py-3 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold hover:shadow-lg transition-all duration-300 w-full md:w-auto",
    },
  };
  const amenities = [
    {
      icon: "/ameneties-1.svg",
      name: "Temperature Controlled Swimming Pool",
    },
    { icon: "/ameneties-2.svg", name: "Kids Pool" },
    { icon: "/ameneties-3.svg", name: "Cricket Pitches" },
    { icon: "/gym.svg", name: "Gym" },
    { icon: "/ameneties-5.svg", name: "Hobby Room" },
    { icon: "/ameneties-6.svg", name: "Creche" },
    { icon: "/ameneties-7.svg", name: "Walking Trial" },
    { icon: "/ameneties-8.svg", name: "Pet Park" },
    { icon: "/ameneties-9.svg", name: "Outdoor Gym" },
    { icon: "/ameneties-10.svg", name: "Conference Room" },
    { icon: "/ameneties-11.svg", name: "Yoga Lawn" },
    { icon: "/ameneties-12.svg", name: "Party Lawn" },
    { icon: "/ameneties-13.svg", name: "Preview Theatre" },
    { icon: "/ameneties-14.svg", name: "Guest Room" },
    { icon: "/ameneties-15.svg", name: "Cafe Lounge" },
    { icon: "/ameneties-16.svg", name: "Clinic" },
    { icon: "/ameneties-17.svg", name: "Pharmacy" },
    { icon: "/ameneties-18.svg", name: "Cardio Fitness" },
  ];

  // ✅ Fixed: Added missing `budgetStyle` variable or use `buttonStyle` directly
  const galleryData = [
    { src: "/gallery-1.png", caption: " " },
    { src: "/gallery-2.png", caption: " " },
    { src: "/gallery-3.png", caption: " " },
  ];
  const locationHighlightsData = {
    "it-companies": [
      "Wipro – 9 Mins",
      "Microsoft – 13 Mins",
      "Infosys – 18 Mins",
    ],
    connectivity: [
      "Lingampally Railway Station - 2 Kms",
      "RGI Airport - 45 Mins",
    ],
    schools: [
      "Sancta Maria School – 8 Mins",
      "Glendale School - 10 Mins",
      "Vista School - 12 Mins",
      "Oakridge School - 18 Mins",
      "Delhi Public School - 22 Mins",
    ],
    supermarkets: ["D-Mart – 2 Mins", "Ratnadeep – 3 Mins"],
    hospitals: [
      "Citizens Multispecialty Hospital – 3 Mins",
      "Continental Hospital – 14 Mins",
      "Star Hospitals – 17 Mins",
    ],
    hotels: [
      "Le Meridien Hotel – 20 Mins",
      "Radisson Hitec Hotel – 22 Mins",
      "Novotel Hotel – 28 Mins",
    ],
  };
  const floorPlan = {
    masterPlan: "/floor-plan.webp",
    floorPlans: [
      { src: "/floor-plan-1.webp", alt: "2BHK Floor Plan" },
      {
        src: "/floor-plan-2.webp",
        alt: "3BHK Corner Unit Plan",
      },
      { src: "/floor-plan-3.webp", alt: "3BHK Standard Unit Plan" },
      { src: "/floor-plan-4.webp", alt: "4BHK Duplex Plan" },
      { src: "/floor-plan-5.webp", alt: "3BHK Standard Unit Plan" },
      { src: "/floor-plan-6.webp", alt: "4BHK Duplex Plan" },
      { src: "/floor-plan-7.webp", alt: "3BHK Standard Unit Plan" },
      { src: "/floor-plan-8.webp", alt: "4BHK Duplex Plan" },
      { src: "/floor-plan-9.webp", alt: "3BHK Standard Unit Plan" },
    ],
  };
  const About_src =
    "https://www.youtube.com/embed/NXMVHeQzLdo?autoplay=0&controls=1&showinfo=0&rel=0";
  const Form_2 = {
    src: "/brand-logo.svg",
    address:
      "Aparna Sarovar Towers, Aparna Sarovar Rd, Towers, Nallagandla, Telangana 500019",
    p1: "Apartments for Sale in Nallagandla",
    p2: "Aparna Sarovar 3, & 4 BHK apartments for sale in Nallagandla, Hyderabad",
  };
  return (
    <div className="relative">
      <NavBar
        src="/brand-logo.svg"
        rera_no="P123456789"
        perm_no="3068/GHMC/SLP/2023-BP"
      />

      <Hero
        h1_name1="NALLAGANDLA&rsquo;S"
        h1_name2="TALLEST TOWERS"
        p1="Overlooking the Green HCU Campus"
        p2_1="📍Nallagandla, Hyderabad"
        p2_2="1 Minute Walk to Aparna Neo Mall & Multiplex"
        p3="3 & 4 BHK Apartments | 2878 - 3700 Sq. Ft."
        style={buttonStyle}
        budgetOptions={budgetOptions}
      />

      <Form1
        budgetOptions={budgetOptions}
        submitButton={Form1_btn?.submitButton}
        style={buttonStyle}
      />

      <Gallery
        style={buttonStyle}
        budgetOptions={budgetOptions}
        galleryData={galleryData}
      />

      <SecondSection
        stats={Secondary_Section_Data?.stats}
        h1={Secondary_Section_Data?.h1}
        p1={Secondary_Section_Data?.p1}
        p2={Secondary_Section_Data?.p2}
        style1={color}
        style={buttonStyle}
        src={galleryData[galleryData.length - 1]?.src}
      />
      <LocationHighlight
        galleryData={galleryData}
        style={buttonStyle}
        locationData={locationHighlightsData}
      />
      <ThirdSection
        amenities={amenities}
        style={buttonStyle}
        budgetOptions={budgetOptions}
      />
      <FloorPlan
        masterPlanImage={floorPlan.masterPlan}
        floorPlans={floorPlan.floorPlans}
        style={buttonStyle}
        budgetOptions={budgetOptions}
      />
      <About
        src={About_src}
        style={buttonStyle}
        budgetOptions={budgetOptions}
      />
      <Form2
        src={Form_2.src}
        style={buttonStyle}
        address={Form_2.address}
        p1={Form_2.p1}
        p2={Form_2.p2}
        budgetOptions={budgetOptions}
      />
      <Footer />
      <StickyCTA />
      <MobileSticky />
    </div>
  );
}
