"use client";

// Import components
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

// Import the centralized data
import { siteData } from "./siteData";

export default function Home() {
  // Destructure for easier access
  const {
    common,
    navBar,
    hero,
    form1,
    gallery,
    secondarySection,
    locationHighlights,
    amenities,
    floorPlan,
    about,
    form2,
  } = siteData;

  const colorStyle1 = {
    color: common.themeColor1,
  };

  const colorStyle2 = {
    color: common.themeColor2,
  };

  return (
    <div className="relative">
      <NavBar
        src={navBar.logoSrc}
        rera_no={navBar.reraNo}
        perm_no={navBar.permNo}
      />

      <Hero
        h1_name1={hero.title1}
        h1_name2={hero.title2}
        p1={hero.subtitle}
        p2_1={hero.location}
        p2_2={hero.feature1}
        p3={hero.feature2}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
      />

      <Form1
        budgetOptions={common.budgetOptions}
        submitButton={form1.submitButton}
        style={common.buttonStyle2}
      />

      <Gallery
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        galleryData={gallery}
      />

      <SecondSection
        stats={secondarySection.stats}
        h1={secondarySection.title}
        p1={secondarySection.p1}
        p2={secondarySection.p2}
        style1={colorStyle2}
        style={common.buttonStyle1}
        src={gallery[gallery.length - 1]?.src} // Still dynamically getting the last image
      />

      <LocationHighlight
        galleryData={gallery}
        style={common.buttonStyle2}
        locationData={locationHighlights}
        budgetOptions={common.budgetOptions}
      />

      <ThirdSection
        amenities={amenities}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
      />

      <FloorPlan
        masterPlanImage={floorPlan.masterPlan}
        floorPlans={floorPlan.floorPlans}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
      />

      <About
        src={about.videoSrc}
        style={common.buttonStyle2}
        budgetOptions={common.budgetOptions}
      />

      <Form2
        src={form2.logoSrc}
        style={common.buttonStyle1}
        address={form2.address}
        p1={form2.title}
        p2={form2.subtitle}
        budgetOptions={common.budgetOptions}
      />

      <Footer />
      <StickyCTA budgetOptions={common.budgetOptions} style={common.buttonStyle1} />
      <MobileSticky />
    </div>
  );
}
