import React from "react";
import { BiCustomize } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";

function Card() {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-3 text-start">
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="mb-4 text-secondary">
            <BiCustomize style={{ fontSize: "5rem", color: "inherit" }} />
          </div>
          <h4 className="card-title text-bold">Awesome feature one</h4>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="container container-lg py-5">
      <h2 className="h2 text-center mb-5 text-bolder">
        Our <span className="text-primary">Services</span>
      </h2>
      <div className="row g-4 justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="row my-5 pt-5">
        <div className="d-flex justify-content-center text-center align-items-center">
          <h5 className="text-bold m-0 mx-4">Join us</h5>
          <Link to="/sign-up">
            <button className="btn btn-primary">Sign Up</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
