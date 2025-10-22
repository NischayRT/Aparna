// --- Theme colors assumed for Aparna Deccan Town ---
const deccanTownThemeColor1 = "#A0522D"; // Sienna Brown (Example)
const deccanTownThemeColor2 = "#8B4513"; // Saddle Brown (Example)

// --- Theme colors for Project 1: Aparna Sarovar ---
const aparnaThemeColor1 = "#FE4848";
const aparnaThemeColor2 = "#A83031";

export const allSiteData = {
  // --- Data for Project 1: Aparna Sarovar Towers ---
  "aparna-sarovar": {
    // ... (rest of aparna-sarovar data remains unchanged)
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
    navBar: {
      logoSrc: "/brand-logo.svg",
      reraNo: "P123456789",
      permNo: "3068/GHMC/SLP/2023-BP",
    },
    hero: {
      title1: "NALLAGANDLA’S",
      title2: "TALLEST TOWERS",
      subtitle: "Overlooking the Green HCU Campus",
      location: "📍Nallagandla, Hyderabad",
      feature1: "1 Minute Walk to Aparna Neo Mall & Multiplex",
      feature2: "3 & 4 BHK Apartments | 2878 - 3700 Sq. Ft.",
    },
    form1: {
      submitButton: {
        text: "SUBMIT",
        className:
          "px-8 py-3 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold hover:shadow-lg transition-all duration-300 w-full md:w-auto",
      },
    },
    // Gallery for Sarovar remains an array (or update if needed)
    gallery: [
      { src: "/gallery-1.png", caption: "Lobby" },
      { src: "/gallery-2.png", caption: "Exterior View" },
      { src: "/gallery-3.png", caption: "Living Area" },
    ],
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
    about: {
      videoSrc:
        "https://www.youtube.com/embed/NXMVHeQzLdo?autoplay=0&controls=1&showinfo=0&rel=0",
    },
    form2: {
      logoSrc: "/brand-logo.svg",
      address:
        "Aparna Sarovar Towers, Aparna Sarovar Rd, Towers, Nallagandla, Telangana 500019",
      title: "Apartments for Sale in Nallagandla",
      subtitle:
        "Aparna Sarovar 3, & 4 BHK apartments for sale in Nallagandla, Hyderabad",
    },
  },

  // --- Data for Project 2: Aparna Deccan Town ---
  "aparna-deccan-town": {
    common: {
      themeColor1: deccanTownThemeColor1,
      themeColor2: deccanTownThemeColor2,
      buttonStyle1: {
        backgroundColor: deccanTownThemeColor1,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "medium",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        // Add hover styles directly if not using darkenColor
        // ':hover': {
        //    backgroundColor: '#8B4513', // Example darker color
        // }
      },
      buttonStyle2: {
        backgroundColor: deccanTownThemeColor2,
        color: "white",
        padding: "1rem 2rem",
        borderRadius: "2px",
        fontWeight: 600,
        fontSize: "medium",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        // ':hover': {
        //    backgroundColor: '#5C2E0D', // Example darker color
        // }
      },
      budgetOptions: [
        { value: "1.4 Cr - 1.5 Cr", label: "1.4 Cr - 1.5 Cr" },
        { value: "1.5 Cr - 1.6 Cr", label: "1.5 Cr - 1.6 Cr" },
        { value: "1.6 Cr - 1.7 Cr", label: "1.6 Cr - 1.7 Cr" },
        { value: "More than 1.7 Cr", label: "More than 1.7 Cr" },
        { value: "2.2 Cr - 2.5 Cr", label: "2.2 Cr - 2.5 Cr" },
        { value: "2.5 Cr - 2.7 Cr", label: "2.5 Cr - 2.7 Cr" },
        { value: "2.7 Cr - 2.9 Cr", label: "2.7 Cr - 2.9 Cr" },
        { value: "More than 2.9 Cr", label: "More than 2.9 Cr" },
      ],
    },
    navBar: {
      logoSrc:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/navbar-logo.svg",
      reraNo: "",
      permNo: "",
    },
    hero: {
      title1: "APARNA",
      title2: "DECCAN TOWN",
      subtitle: "Near West Hyderabad’s IT Corridor",
      location: "📍 Gopanpally, Hyderabad",
      feature1: "Township featuring High-Rise Apartments & Bungalows",
      feature2: "Luxury 3 & 4 BHK Apartments | Premium Mall",
    },
    form1: {
      submitButton: { text: "SUBMIT" },
    },
    gallery: {
      "Aparna Deccan Town": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-1.png",
          caption: "Deccan Town View 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-2.png",
          caption: "Deccan Town View 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-3.png",
          caption: "Deccan Town View 3",
        },
      ],
      "Aparna Sunstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-1.png",
          caption: "Sunstone Gallery 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-2.png",
          caption: "Sunstone Gallery 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-3.png",
          caption: "Sunstone Gallery 3",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-4.png",
          caption: "Sunstone Gallery 4",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-5.png",
          caption: "Sunstone Gallery 5",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-6.png",
          caption: "Sunstone Gallery 6",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-7.png",
          caption: "Sunstone Gallery 7",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-8.png",
          caption: "Sunstone Gallery 8",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-9.png",
          caption: "Sunstone Gallery 9",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-10.png",
          caption: "Sunstone Gallery 10",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-11.png",
          caption: "Sunstone Gallery 11",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-12.png",
          caption: "Sunstone Gallery 12",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-13.png",
          caption: "Sunstone Gallery 13",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal14.png", // Corrected filename if needed
          caption: "Sunstone Gallery 14",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal-15.png",
          caption: "Sunstone Gallery 15",
        },
      ],
      "Aparna Moonstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-gal-1.png",
          caption: "Moonstone Gallery 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-gal-2.png",
          caption: "Moonstone Gallery 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-gal-3.png",
          caption: "Moonstone Gallery 3",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-gal-4.png",
          caption: "Moonstone Gallery 4",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-gal-5.png",
          caption: "Moonstone Gallery 5",
        },
      ],
    },
    secondarySection: {
      title: "Welcome to Aparna Deccan Town",
      p1: "Welcome to Aparna Deccan Town, the township of tomorrow where modern living meets timeless elegance. Explore a thoughtfully designed community featuring four high-rise apartment gated communities, one uber-luxury bungalow enclave, and a luxury high-street. With exceptional amenities that seamlessly blend nature and innovation, Deccan Town offers more than just a residence- it's the future of sophisticated living.",
      p2: "This thoughtfully planned development currently features luxury high-rise gated communities - Aparna Sunstone, Aparna Moonstone and Aparna Amber Bungalows, a uber-luxury bungalow community complemented by a Premium Mall, creating an exceptional lifestyle for residents.",
      stats: [
        { value: "24.9 Acre", label: "PROJECT (Sunstone)" },
        { value: "9", label: "TOWERS (Sunstone)" },
        { value: "G+44", label: "FLOORS (Sunstone)" },
        { value: "3213", label: "UNITS (Sunstone)" },
        { value: "3 BHK", label: "APARTMENTS (Sunstone)" },
        { value: "1478 - 2237 Sft.", label: "UNIT SIZE (Sunstone)" },
      ],
    },
    locationHighlights: {
      "it-companies": [
        "Wipro-Gopanpally – 2 Mins",
        "Q City – 7 Mins",
        "US Consulate – 7 Mins",
        "Microsoft – 12 Mins",
        "Infosys – 14 Mins",
        "Wave Rock – 15 Mins",
        "Gachibowli – 16 Mins",
      ],
      connectivity: [
        "Gopanpally Circle – 7 Mins",
        "Wipro Circle – 10 Mins",
        "Neopolis – 10 Mins",
        "Kokapet – 11 Mins",
        "Nanakramguda Junction – 12 Mins",
        "ORR Exit No 1 – 12 Mins",
        "ORR Exit No 2 – 15 Mins",
        "Lingampally Railway Station – 21 Mins",
        "Gachibowli Circle – 24 Mins",
      ],
      schools: [
        "Glendale School – 2 Mins",
        "Vista School – 2 Mins",
        "Sridevi Engineering College – 7 Mins",
        "St Xavier's PG College – 10 Mins",
        "Euro Kid's Pre School – 10 Mins",
        "Birla Open Minds School – 15 Mins",
      ],
      hospitals: [
        "Citizens Hospital – 12 Mins",
        "Continental Hospital – 15 Mins",
        "Star Hospital – 19 Mins",
      ],
      supermarkets: [],
      hotels: [],
    },
    amenities: [
      /* Combined amenities */
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-1.svg",
        name: "Clubhouse",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-2.svg",
        name: "Swimming Pool",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-3.svg",
        name: "Futsal Courts",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-4.svg",
        name: "Mini Golf",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-5.svg",
        name: "BBQ & Picnic Zone",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-6.svg",
        name: "Rain Garden",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-7.svg",
        name: "Mini Theatre",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-8.svg",
        name: "Creche",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-9.svg",
        name: "Kitty Party Room",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-10.svg",
        name: "Thematic Gardens",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/a-11.svg",
        name: "Volleyball Courts",
      }, // Assuming this is as-11
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-12.svg",
        name: "Cricket Practice Pitches",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-13.svg",
        name: "Floating Kanopy Walk",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-14.svg",
        name: "Skating Rink",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-15.svg",
        name: "Pet Park",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-16.svg",
        name: "Outdoor Gym",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-17.svg",
        name: "Pickleball Courts",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-18.svg",
        name: "Spa",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/as-19.svg",
        name: "Adventure Play",
      },
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-3.png",
        name: "Forest Adventures Play",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-6.svg",
        name: "Supermarket",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-7.svg",
        name: "Rain Shower",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-8.svg",
        name: "Preview Theater",
      }, // from moonstone (duplicate Mini Theatre?)
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-9.svg",
        name: "Excercise Deck",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-11.svg",
        name: "Billiards",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-12.svg",
        name: "Sports Courts",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-13.svg",
        name: "Forest Zone",
      }, // from moonstone
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-17.svg",
        name: "Cycle Track",
      }, // from moonstone (duplicate?)
      {
        icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-19.svg",
        name: "Sand Pit",
      }, // from moonstone
    ],
    floorPlan: {
      masterPlan:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/pm-1.png",
      floorPlans: [
        // Combined Floor Plans
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-1.png",
          alt: "Sunstone 2 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-2.png",
          alt: "Sunstone 2 BHK Plan 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-3.png",
          alt: "Sunstone 3 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-5.jpg",
          alt: "Sunstone 3 BHK Plan 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-1.png",
          alt: "Moonstone 2 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-2.png",
          alt: "Moonstone 3 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-3.png",
          alt: "Moonstone 3 BHK Plan 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-4-min.jpg",
          alt: "Moonstone 4 BHK Plan 1",
        },
      ],
    },
    about: {
      videoSrc: "https://www.youtube.com/embed/lCK_Wd4ySZk?si=PDwS1BBgR8fo1mBe",
    },
    form2: {
      logoSrc:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/navbar-logo.svg",
      address:
        "APARNA CONSTRUCTIONS AND ESTATES PVT LTD.\n#802, DOOR NO: 6-3-352/2&3, ASTRAL HEIGHTS\nROAD NO: 1, BANJARA HILLS, HYDERABAD-500034 TELANGANA, INDIA",
      title: "LOCATION MAP",
      subtitle: "SCHEDULE A VISIT",
    },
  },
};
