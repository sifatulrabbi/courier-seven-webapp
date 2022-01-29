import React from "react";
import Button from "../button/button";
import { heroImg } from "../../assets";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          <span className="colored">Deliver</span> your product as{" "}
          <span className="colored">fast</span> as the{" "}
          <span className="colored">sparkle</span> of thunder
        </h1>
        <div className="hero-left-bottom">
          <Button label="Sign Up" />
          <Button label="Login" secondary />
        </div>
      </div>
      <img src={heroImg} alt="Hero" className="hero-img" />
    </header>
  );
}
