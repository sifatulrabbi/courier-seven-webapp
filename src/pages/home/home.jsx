import React from "react";
import {
  Hero,
  TrackingSection,
  ServicesSection,
  CoverageSection,
  PricingSection,
  FaqSection,
} from "../../components";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TrackingSection />
      <ServicesSection />
      <CoverageSection />
      <PricingSection />
      <FaqSection />
    </div>
  );
}
