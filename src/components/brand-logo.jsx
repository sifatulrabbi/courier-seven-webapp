import React from "react";
import { brandLogoFull } from "../assets";

export default function BrandLogo() {
  function gotoHome(e) {
    window.location.href = "/";
  }

  return (
    <button className="brand" onClick={gotoHome}>
      <img src={brandLogoFull} alt="Courier 007" className="brand-logo" />
    </button>
  );
}
