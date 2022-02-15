import React from "react";
import { useNavigate } from "react-router-dom";
import { bdMap } from "../assets";
import Button from "./button";

export default function CoverageSection() {
  const navigate = useNavigate();

  return (
    <div className="coverage-section" id="coverage">
      <img src={bdMap} alt="Map of Bangladesh" />
      <div className="wrapper">
        <h2 className="section-title">Our Coverage area</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable
        </p>
        <Button
          label="See full list"
          secondary
          onClickFnc={function () {
            navigate("/coverage", { replace: true });
          }}
        />
      </div>
    </div>
  );
}
