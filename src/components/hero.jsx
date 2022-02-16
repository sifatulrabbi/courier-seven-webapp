import React from "react";
import { Link } from "react-router-dom";

const HeroRegForm = () => {
  return (
    <form action="post" className="hero-form bg-white p-4 rounded w-100">
      <input
        type="number"
        className="form-control mb-3"
        id="mobile"
        placeholder="Mobile"
        aria-placeholder="input your mobile number"
        autoComplete="phone"
      />
      <input
        type="email"
        className="form-control mb-3"
        id="email"
        placeholder="Email"
        aria-placeholder="input your email address"
        autoComplete="email"
      />
      <button className="btn btn-secondary w-100">Register</button>
    </form>
  );
};

export default function Hero() {
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
}
