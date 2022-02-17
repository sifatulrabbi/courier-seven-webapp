import React from "react";
import { Link } from "react-router-dom";
import HeroRegForm from "./hero-reg-form";

const Hero = () => {
  return (
    <div className="container-fluid hero bg-gray">
      <div className="container container-lg h-100 p-0">
        <div className="row h-100">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
            <h1 className="display-3 text-bolder">
              Deliver your products as fast as the sparkle of thunder
            </h1>
            <Link
              to="/login"
              className="align-self-center align-self-lg-start mt-5"
            >
              <button className="btn btn-primary hero-btn">Login</button>
            </Link>
          </div>
          <div className="col d-flex align-items-center justify-content-center justify-content-lg-end">
            <HeroRegForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
