import React from "react";
import { serviceData } from "../../assets";
import ServiceCard from "../service-card/service-card";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2 className="section-title dark">
        <span className="colored">Services</span>
        <br /> we provide
      </h2>
      <ul className="services-list">
        {serviceData.map((data) => (
          <li>
            <ServiceCard
              img={data.img}
              title={data.name}
              description={data.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
