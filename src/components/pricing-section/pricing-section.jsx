import React from "react";
import PriceCalculator from "../price-calculator/price-calculator";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title">
        Calculate your
        <br />
        <span className="colored">Delivery</span> charge
      </h2>
      <p>
        Plan ahead with our delivery calculator and take the benefit of fast
        delivery
      </p>
      <PriceCalculator />
      <div className="bottom">
        Get the full price list <Link to="/">here</Link>
      </div>
    </section>
  );
}
