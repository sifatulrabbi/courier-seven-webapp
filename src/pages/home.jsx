import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Coverage from "../components/coverage";
import PriceCalculator from "../components/price-calculator";
import FAQs from "../components/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Coverage />
      <PriceCalculator />
      <FAQs />
    </>
  );
}
