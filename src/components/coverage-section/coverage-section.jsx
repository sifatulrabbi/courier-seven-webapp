import React from "react";
import { bdMap } from "../../assets";

export default function CoverageSection() {
  return (
    <div className="coverage-section">
      <img src={bdMap} alt="Map of Bangladesh" />
      <div className="wrapper">
        <h2 className="section-title">Our Coverage area</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable
        </p>
      </div>
    </div>
  );
}
