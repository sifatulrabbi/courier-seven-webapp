import React from "react";
import {
  Navbar,
  Footer,
  ScrollToTop,
  Hero,
  TrackingSection,
  ServicesSection,
  CoverageSection,
  PricingSection,
  FaqSection,
} from "../../components";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="home-page">
        <Hero />
        <TrackingSection />
        <ServicesSection />
        <CoverageSection />
        <PricingSection />
        <FaqSection />
      </div>
      <Footer />
    </>
  );
}
