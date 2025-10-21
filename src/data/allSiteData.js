// This object will act as our "database" for multiple real estate projects.

// --- Theme colors for Project 1: Aparna Sarovar ---
const aparnaThemeColor1 = "#FE4848";
const aparnaThemeColor2 = "#A83031";

// --- Theme colors for Project 2: Urban Oasis ---
const urbanOasisThemeColor1 = "#2A9D8F";
const urbanOasisThemeColor2 = "#264653";

export const allSiteData = {
  // --- Data for Project 1: Aparna Sarovar Towers ---
  "aparna-sarovar": {
    // Common data used across multiple components
    common: {
      themeColor1: aparnaThemeColor1,
      themeColor2: aparnaThemeColor2,
      buttonStyle1: {
        backgroundColor: aparnaThemeColor1,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "medium",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      },
      buttonStyle2: {
        backgroundColor: aparnaThemeColor2,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "medium",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      },
      budgetOptions: [
        { value: "3 Cr - 4 Cr", label: "3 Cr - 4 Cr" },
        { value: "4 Cr - 5 Cr", label: "4 Cr - 5 Cr" },
        { value: "5 Cr - 6 Cr", label: "5 Cr - 6 Cr" },
        { value: "More than 6 Cr", label: "More than 6 Cr" },
      ],
    },
    // Data for the NavBar component
    navBar: {
      logoSrc: "/brand-logo.svg",
      reraNo: "P123456789",
      permNo: "3068/GHMC/SLP/2023-BP",
    },
    // Data for the Hero component
    hero: {
      title1: "NALLAGANDLA’S",
      title2: "TALLEST TOWERS",
      subtitle: "Overlooking the Green HCU Campus",
      location: "📍Nallagandla, Hyderabad",
      feature1: "1 Minute Walk to Aparna Neo Mall & Multiplex",
      feature2: "3 & 4 BHK Apartments | 2878 - 3700 Sq. Ft.",
    },
    // Data for the Form1 component
    form1: {
      submitButton: {
        text: "SUBMIT",
        className:
          "px-8 py-3 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold hover:shadow-lg transition-all duration-300 w-full md:w-auto",
      },
    },
    // Data for the Gallery component
    gallery: [
      { src: "/gallery-1.png", caption: "Lobby" },
      { src: "/gallery-2.png", caption: "Exterior View" },
      { src: "/gallery-3.png", caption: "Living Area" },
    ],
    // Data for the SecondSection component
    secondarySection: {
      title: "Gated Community Flats for Sale in Nallagandla",
      p1: "Aparna Sarovar Towers is a gated community offering luxury 3 & 4 BHK apartments for sale in Nallagandla.",
      p2: "The project boasts access to Nallagandla Hi-street panoramic views of the HCU campus and cityscape, a grand 52,932 sq ft Clubhouse, and three car parks per unit.",
      stats: [
        { value: "3", label: "TOWERS" },
        { value: "G+50", label: "FLOORS" },
        { value: "3 & 4 BHK\n(+Maid Room)", label: "CONFIGURATIONS" },
        { value: "2878-3700 Sft.", label: "AREA RANGE" },
      ],
    },
    // Data for the LocationHighlight component
    locationHighlights: {
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
    },
    // Data for the ThirdSection (Amenities)
    amenities: [
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
    ],
    // Data for the FloorPlan component
    floorPlan: {
      masterPlan: "/floor-plan.webp",
      floorPlans: [
        { src: "/floor-plan-1.webp", alt: "2BHK Floor Plan" },
        { src: "/floor-plan-2.webp", alt: "3BHK Corner Unit Plan" },
        { src: "/floor-plan-3.webp", alt: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-4.webp", alt: "4BHK Duplex Plan" },
        { src: "/floor-plan-5.webp", alt: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-6.webp", alt: "4BHK Duplex Plan" },
        { src: "/floor-plan-7.webp", alt: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-8.webp", alt: "4BHK Duplex Plan" },
        { src: "/floor-plan-9.webp", alt: "3BHK Standard Unit Plan" },
      ],
    },
    // Data for the About component
    about: {
      videoSrc:
        "https://www.youtube.com/embed/NXMVHeQzLdo?autoplay=0&controls=1&showinfo=0&rel=0",
    },
    // Data for the Form2 component
    form2: {
      logoSrc: "/brand-logo.svg",
      address:
        "Aparna Sarovar Towers, Aparna Sarovar Rd, Towers, Nallagandla, Telangana 500019",
      title: "Apartments for Sale in Nallagandla",
      subtitle:
        "Aparna Sarovar 3, & 4 BHK apartments for sale in Nallagandla, Hyderabad",
    },
  },

  // --- Data for Project 2: Urban Oasis ---
  "urban-oasis": {
    // Common data for Urban Oasis
    common: {
      themeColor1: urbanOasisThemeColor1,
      themeColor2: urbanOasisThemeColor2,
      buttonStyle1: {
        backgroundColor: urbanOasisThemeColor1,
        color: "white",
        padding: "0.8rem 1.8rem",
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: "large",
        boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      },
      buttonStyle2: {
        backgroundColor: urbanOasisThemeColor2,
        color: "white",
        padding: "0.8rem 1.8rem",
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: "large",
        boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease",
      },
      budgetOptions: [
        { value: "1 Cr - 2 Cr", label: "1 Cr - 2 Cr" },
        { value: "2 Cr - 3 Cr", label: "2 Cr - 3 Cr" },
        { value: "3 Cr - 4 Cr", label: "3 Cr - 4 Cr" },
        { value: "More than 4 Cr", label: "More than 4 Cr" },
      ],
    },
    // NavBar for Urban Oasis
    navBar: {
      logoSrc: "/urban-oasis-logo.svg",
      reraNo: "P987654321",
      permNo: "1122/MCH/NKL/2024-AC",
    },
    // Hero for Urban Oasis
    hero: {
      title1: "URBAN OASIS",
      title2: "IN THE CITY'S HEART",
      subtitle: "A Green Sanctuary in Gachibowli",
      location: "📍Gachibowli, Hyderabad",
      feature1: "Next to the Financial District Metro Station",
      feature2: "2 & 3 BHK Smart Homes | 1450 - 2100 Sq. Ft.",
    },
    // Form1 for Urban Oasis
    form1: {
      submitButton: {
        text: "ENQUIRE NOW",
        className:
          "px-10 py-3 rounded-lg bg-gradient-to-r from-teal-600 to-cyan-700 text-white font-bold hover:shadow-xl transition-all duration-300 w-full md:w-auto",
      },
    },
    // Gallery for Urban Oasis
    gallery: [
      { src: "/urban-gallery-1.png", caption: "Rooftop Pool" },
      { src: "/urban-gallery-2.png", caption: "Facade" },
      { src: "/urban-gallery-3.png", caption: "Modern Kitchen" },
    ],
    // SecondarySection for Urban Oasis
    secondarySection: {
      title: "Premium Smart Homes in Gachibowli",
      p1: "Urban Oasis offers a unique blend of city life and serene nature with its state-of-the-art smart homes.",
      p2: "The project features lush vertical gardens, a stunning rooftop infinity pool, and an exclusive co-working space, all within walking distance of major tech parks.",
      stats: [
        { value: "2", label: "TOWERS" },
        { value: "G+35", label: "FLOORS" },
        { value: "2 & 3 BHK\n(Smart Homes)", label: "CONFIGURATIONS" },
        { value: "1450-2100 Sft.", label: "AREA RANGE" },
      ],
    },
    // LocationHighlight for Urban Oasis
    locationHighlights: {
      "it-companies": [
        "DLF Cybercity – 5 Mins",
        "Amazon Campus – 8 Mins",
        "Google Campus – 10 Mins",
      ],
      connectivity: [
        "Financial District Metro - 2 Mins",
        "Outer Ring Road - 5 Mins",
      ],
      schools: [
        "Future Kids School – 5 Mins",
        "Phoenix Greens – 10 Mins",
        "CHIREC International - 15 Mins",
      ],
      supermarkets: ["More Supermarket – 1 Min", "FreshCo – 4 Mins"],
      hospitals: ["AIG Hospitals – 5 Mins", "Care Hospitals – 12 Mins"],
      hotels: [
        "Sheraton Hyderabad – 8 Mins",
        "Hyatt Gachibowli – 10 Mins",
        "ITC Kohenur – 15 Mins",
      ],
    },
    // Amenities for Urban Oasis
    amenities: [
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
    ],
    // FloorPlan for Urban Oasis
    floorPlan: {
      masterPlan: "/urban-master-plan.webp",
      floorPlans: [
        { src: "/urban-floor-plan-1.webp", alt: "2BHK Unit Plan" },
        { src: "/urban-floor-plan-2.webp", alt: "3BHK Unit Plan" },
      ],
    },
    // About for Urban Oasis
    about: {
      videoSrc:
        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0&rel=0",
    },
    // Form2 for Urban Oasis
    form2: {
      logoSrc: "/urban-oasis-logo.svg",
      address:
        "Urban Oasis, Financial District, Nanakramguda, Gachibowli, Hyderabad, Telangana 500032",
      title: "Smart Homes for Sale in Gachibowli",
      subtitle:
        "Urban Oasis 2 & 3 BHK smart homes for sale in Gachibowli, Hyderabad",
    },
  },

  // You can add another project here by creating a new key like 'project-gamma'
  // and providing the full data structure.
};
