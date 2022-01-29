import React from "react";
import TrackingForm from "../tracking-form/tracking-form";

export default function TrackingSection() {
  return (
    <section className="tracking-section">
      <div className="section-info">
        <h2 className="section-title">Track your product from home</h2>
        <p className="section-desc">
          We provide live tracking of your delivery. Enter your tracking id and
          get the location of your product
        </p>
      </div>
      <TrackingForm />
    </section>
  );
}
