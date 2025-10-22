// --- Theme colors assumed for Aparna Deccan Town ---
const deccanTownThemeColor1 = "#A0522D"; // Sienna Brown (Example)
const deccanTownThemeColor2 = "#8B4513"; // Saddle Brown (Example)

// --- Theme colors for Project 1: Aparna Sarovar ---
const aparnaThemeColor1 = "#FE4848";
const aparnaThemeColor2 = "#A83031";

export const allSiteData = {
  // --- Data for Project 1: Aparna Sarovar Towers ---
  "aparna-sarovar": {
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
      desktopBg: "/Hero.jpg",
      mobileBg: "/Hero.jpg",
    },
    form1: {
      submitButton: {
        text: "SUBMIT",
        className:
          "px-8 py-3 rounded-full bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold hover:shadow-lg transition-all duration-300 w-full md:w-auto",
      },
    },
    gallery: [
      { src: "/gallery-1.png", caption: "Lobby" },
      { src: "/gallery-2.png", caption: "Exterior View" },
      { src: "/gallery-3.png", caption: "Living Area" },
    ],
    secondarySection: {
      title: "Gated Community Flats for Sale in Nallagandla",
      p1: "Aparna Sarovar Towers is a gated community offering luxury 3 & 4 BHK apartments for sale in Nallagandla.",
      p2: "The project boasts access to Nallagandla Hi-street panoramic views of the HCU campus and cityscape, a grand 52,932 sq ft Clubhouse, and three car parks per unit.",
      image: "/gallery-3.png",
      propertyCards: [
        {
          title: "Project Details",
          subtitle: "3 & 4 BHK (+Maid Room)",
          stats: [
            { value: "3", label: "TOWERS" },
            { value: "G+50", label: "FLOORS" },
            { value: "2878-3700 Sft.", label: "AREA RANGE" },
          ],
        },
      ],
    },
    locationHighlights: {
      // --- UPDATED: New image URLs for aparna-sarovar ---
      gallery: [
        {
          src: "/loc-high-1.svg",
          caption: "Location Image 1",
        },
        {
          src: "/loc-high-2.svg",
          caption: "Location Image 2",
        },
        {
          src: "/loc-high-3.svg",
          caption: "Location Image 3",
        },
      ],
      categories: {
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
    },
    amenities: {
      "Main Amenities": [
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
    },
    virtualTours: {
      title: "Take a Virtual Tour",
      videos: [],
    },
    masterPlan: {
      "Master Plan": [
        {
          src: "/floor-plan.webp",
          caption: "Project Masterplan",
        },
      ],
    },
    floorPlan: {
      "Apartment Plans": [
        { src: "/floor-plan-1.webp", caption: "2BHK Floor Plan" },
        { src: "/floor-plan-2.webp", caption: "3BHK Corner Unit Plan" },
        { src: "/floor-plan-3.webp", caption: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-4.webp", caption: "4BHK Duplex Plan" },
        { src: "/floor-plan-5.webp", caption: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-6.webp", caption: "4BHK Duplex Plan" },
        { src: "/floor-plan-7.webp", caption: "3BHK Standard Unit Plan" },
        { src: "/floor-plan-8.webp", caption: "4BHK Duplex Plan" },
        { src: "/floor-plan-9.webp", caption: "3BHK Standard Unit Plan" },
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

  // --- Data for Project 2: Aparna Deccan Town (UPDATED) ---
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
      logoSrc: "",
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
      desktopBg:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/deccan-town-banner.webp",
      mobileBg:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/deccan-town-mobile-banner.webp",
    },
    form1: {
      submitButton: { text: "SUBMIT" },
    },
    gallery: {
      "Aparna Deccan Town": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-1.png",
          caption: "Deccan Gallery 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-2.png",
          caption: "Deccan Gallery 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/dec-gal-3.png",
          caption: "Deccan Gallery 3",
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
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-gal14.png",
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
      image:
        "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/third-sec.png",
      propertyCards: [
        {
          title: "Aparna Sunstone",
          subtitle:
            "Offering <b>Luxury 3 BHK Apartments for <br>Sale in Hyderabad</b>",
          stats: [
            { value: "24.9 Acre", label: "Project" },
            { value: "9", label: "Towers" },
            { value: "G+44", label: "Floors" },
            { value: "3213", label: "Units" },
            { value: "3 BHK", label: "Apartments" },
            { value: "1478 - 2237 Sft.", label: "Unit Size" },
          ],
        },
        {
          title: "Aparna Moonstone",
          subtitle:
            "Offering <b>Luxury 3 & 4 BHK Apartments for<br> Sale in Hyderabad</b>",
          stats: [
            { value: "22.28 Acre", label: "Project" },
            { value: "8", label: "Towers" },
            { value: "G+44", label: "Floors" },
            { value: "2088", label: "Units" },
            { value: "3 & 4 BHK", label: "Apartments" },
            { value: "2166 - 3140 Sft.", label: "Unit Size" },
          ],
        },
      ],
    },
    locationHighlights: {
      // --- UPDATED: New image URLs for aparna-deccan-town ---
      gallery: [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/loc-high-1.png",
          caption: "Location Highlight 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/loc-high-2.png",
          caption: "Location Highlight 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/loc-high-3.png",
          caption: "Location Highlight 3",
        },
      ],
      categories: {
        "Key Connectivity": [
          "Gopanpally Circle – <strong>7 Mins</strong>",
          "Wipro Circle – <strong>10 Mins</strong>",
          "Neopolis – <strong>10 Mins</strong>",
          "Kokapet – <strong>11 Mins</strong>",
          "Nanakramguda Junction – <strong>12 Mins</strong>",
          "ORR Exit No 1 – <strong>12 Mins</strong>",
          "ORR Exit No 2 – <strong>15 Mins</strong>",
          "Lingampally Railway Station – <strong>21 Mins</strong>",
          "Gachibowli Circle – <strong>24 Mins</strong>",
        ],
        "IT Firms": [
          "Wipro-Gopanpally – <strong>2 Mins</strong>",
          "Q City – <strong>7 Mins</strong>",
          "US Consulate – <strong>7 Mins</strong>",
          "Microsoft – <strong>12 Mins</strong>",
          "Infosys – <strong>14 Mins</strong>",
          "Wave Rock – <strong>15 Mins</strong>",
          "Gachibowli – <strong>16 Mins</strong>",
        ],
        "Educational Institutions": [
          "Glendale School – <strong>2 Mins</strong>",
          "Vista School – <strong>2 Mins</strong>",
          "Sridevi Engineering College – <strong>7 Mins</strong>",
          "St Xavier's PG College – <strong>10 Mins</strong>",
          "Euro Kid's Pre School – <strong>10 Mins</strong>",
          "Birla Open Minds School – <strong>15 Mins</strong>",
        ],
        Hospitals: [
          "Citizens Hospital – <strong>12 Mins</strong>",
          "Continental Hospital – <strong>15 Mins</strong>",
          "Star Hospital – <strong>19 Mins</strong>",
        ],
      },
    },
    amenities: {
      "Aparna Sunstone": [
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
        },
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
      ],
      "Aparna Moonstone": [
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-1.svg",
          name: "Clubhouse",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-2.svg",
          name: "Swimmingpool",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-3.png",
          name: "Forest Adventures Play",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-4.svg",
          name: "Spa",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-5.svg",
          name: "Mini Golf",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-6.svg",
          name: "Supermarket",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-7.svg",
          name: "Rain Shower",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-8.svg",
          name: "Preview Theater",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-9.svg",
          name: "Excercise Deck",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-10.svg",
          name: "Creche",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-11.svg",
          name: "Billiards",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-12.svg",
          name: "Sports Courts",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-13.svg",
          name: "Forest Zone",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-14.svg",
          name: "Outdoor Gym",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-15.svg",
          name: "Cricket Practice Pictches",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-16.svg",
          name: "Cycle Track",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-17.svg",
          name: "Skating Rink",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-18.svg",
          name: "Pet Park",
        },
        {
          icon: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/am-19.svg",
          name: "Sand Pit",
        },
      ],
    },
    virtualTours: {
      title: "Take a virtual tour of our Projects",
      videos: [
        {
          title: "Aparna Sunstone",
          src: "https://www.youtube.com/embed/YAusFUuAbgs",
        },
        {
          title: "Aparna Moonstone",
          src: "https://www.youtube.com/embed/y5P0Jc6eHi8",
        },
      ],
    },
    masterPlan: {
      "Aparna Deccan Town": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/pm-1.png",
          caption: "Aparna Deccan Town Masterplan",
        },
      ],
      "Aparna Sunstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/pm-2.png",
          caption: "Aparna Sunstone Masterplan",
        },
      ],
      "Aparna Moonstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/pm-3.png",
          caption: "Aparna Moonstone Masterplan",
        },
      ],
    },
    floorPlan: {
      "Aparna Sunstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-1.png",
          caption: "Sunstone 2 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-2.png",
          caption: "Sunstone 2 BHK Plan 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-3.png",
          caption: "Sunstone 3 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/sun-floor-5.jpg",
          caption: "Sunstone 3 BHK Plan 2",
        },
      ],
      "Aparna Moonstone": [
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-2.png",
          caption: "Moonstone 3 BHK Plan 1",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-3.png",
          caption: "Moonstone 3 BHK Plan 2",
        },
        {
          src: "https://d2tdzhum1kggza.cloudfront.net/LPs/aparna-deccan-town-apartments-in-gopanpally/moon-floor-4-min.jpg",
          caption: "Moonstone 4 BHK Plan 1",
        },
      ],
    },
    about: {
      videoSrc:
        "https://www.youtube.com/embed/NXMVHeQzLdo?autoplay=0&controls=1&showinfo=0&rel=0",
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
