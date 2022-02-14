import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container-lg py-5 hero">
      <div className="row">
        <div className="col-md-7 py-5">
          <h1 className="display-2 my-5 text-white">
            Deliver your products as fast as the sparkle of thunder
          </h1>
        </div>
        <div className="col-md-5 d-flex justify-content-center justify-content-md-end align-items-center">
          <form
            action="none"
            className="hero-form px-3 pt-3 rounded bg-white shadow"
          >
            <div className="form-floating">
              <input
                type="text"
                name="mobile"
                id="mobile"
                className="form-control mt-2"
                placeholder="Mobile"
                autoComplete="phone"
              />
              <label htmlFor="mobile">Mobile</label>
            </div>
            <div className="clearfix w-100 text-center py-2">Or</div>
            <div className="form-floating">
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
                autoComplete="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
              Sign Up
            </button>
            <p className="w-100 pt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
