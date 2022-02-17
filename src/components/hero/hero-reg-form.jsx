import React from "react";

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

export default HeroRegForm;
