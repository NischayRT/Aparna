"use client";

// Import components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Form1 from "./components/Form1";
import Gallery from "./components/Gallery";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FloorPlan from "./components/FloorPlan";
import MasterPlan from "./components/MasterPlan";
import VirtualTours from "./components/VirtualTours";
import About from "./components/About";
import Form2 from "./components/Form2";
import LocationHighlight from "./components/LocationHighlight";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import MobileSticky from "./components/MobileSticky";

// This component is now reusable. It receives the site data via props.
export default function MainPage({ siteData }) {
  // Destructure for easier access from the prop
  const {
    common,
    navBar,
    hero,
    form1,
    gallery,
    secondarySection,
    locationHighlights,
    amenities,
    masterPlan,
    floorPlan,
    virtualTours,
    about,
    form2,
  } = siteData;

  const colorStyle2 = {
    backgroundColor: common.themeColor2,
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
        desktopBg={hero.desktopBg}
        mobileBg={hero.mobileBg}
      />

      <Form1
        budgetOptions={common.budgetOptions}
        submitButton={form1.submitButton}
        style={common.buttonStyle2}
      />

      <Gallery
        title="Gallery"
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        galleryData={gallery}
        style1={colorStyle2}
      />

      <SecondSection
        secondarySection={secondarySection}
        style1={colorStyle2}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
      />

      {/* --- This section shows the correct prop passing --- */}
      <LocationHighlight
        galleryData={locationHighlights.gallery}
        style={common.buttonStyle2}
        locationData={locationHighlights.categories}
        budgetOptions={common.budgetOptions}
        style1={colorStyle2}
      />

      <ThirdSection
        amenities={amenities}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        style1={colorStyle2}
      />

      <VirtualTours
        virtualTours={virtualTours}
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        style1={colorStyle2}
      />

      <MasterPlan
        title="Project Masterplan"
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        galleryData={masterPlan}
        style1={colorStyle2}
      />

      <FloorPlan
        title="Apartment Floor Plans"
        style={common.buttonStyle1}
        budgetOptions={common.budgetOptions}
        galleryData={floorPlan}
        style1={colorStyle2}
      />

      <About
        src={about.videoSrc}
        style={common.buttonStyle2}
        budgetOptions={common.budgetOptions}
        style1={colorStyle2}
      />

      <Form2
        src={form2.logoSrc}
        style={common.buttonStyle1}
        address={form2.address}
        p1={form2.title}
        p2={form2.subtitle}
        budgetOptions={common.budgetOptions}
        style1={colorStyle2}
      />

      <Footer />
      <StickyCTA
        budgetOptions={common.budgetOptions}
        style={common.buttonStyle1}
      />
      <MobileSticky budgetOptions={common.budgetOptions} />
    </div>
  );
}
