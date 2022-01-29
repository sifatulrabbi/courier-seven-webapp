import React from "react";
import { Hero, TrackingSection, ServicesSection } from "../../components";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TrackingSection />
      <ServicesSection />
    </div>
  );
}
