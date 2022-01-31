import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BiStopwatch, BiCustomize } from "react-icons/bi";
import { CgTrack } from "react-icons/cg";
import { RiCompassDiscoverLine } from "react-icons/ri";
import Button from "../button/button";

export default function ServicesSection() {
  function gotoRegister(e) {
    window.location.href = "/";
  }

  return (
    <section className="services-section" id="services">
      <h2 className="section-title dark">
        Why
        <span className="colored"> Working</span>
        <br /> with us
      </h2>
      <ul className="services-list">
        <li>
          <div className="service-card">
            <div className="icon">
              <BiStopwatch />
            </div>
            <div className="wrapper">
              <h4 className="card-title">Fastest delivery time</h4>
              <p className="card-desc">
                We provide live tracking of your delivery. Enter your tracking
                id and get the location of your product
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="icon">
              <AiOutlineSafety />
            </div>
            <div className="wrapper">
              <h4 className="card-title">Secure handling</h4>
              <p className="card-desc">
                We provide live tracking of your delivery. Enter your tracking
                id and get the location of your product
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="icon">
              <BiCustomize />
            </div>
            <div className="wrapper">
              <h4 className="card-title">Customizable service</h4>
              <p className="card-desc">
                We provide live tracking of your delivery. Enter your tracking
                id and get the location of your product
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="icon">
              <CgTrack />
            </div>
            <div className="wrapper">
              <h4 className="card-title">Full tracking</h4>
              <p className="card-desc">
                We provide live tracking of your delivery. Enter your tracking
                id and get the location of your product
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="service-card">
            <div className="icon">
              <RiCompassDiscoverLine />
            </div>
            <div className="wrapper">
              <h4 className="card-title">Nation wide coverage</h4>
              <p className="card-desc">
                We provide live tracking of your delivery. Enter your tracking
                id and get the location of your product
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className="bottom">
        <p>Start your journey</p>
        <Button label="Register now" big onClickFnc={gotoRegister} />
      </div>
    </section>
  );
}
