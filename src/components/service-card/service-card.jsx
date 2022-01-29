import React from "react";

export default function ServiceCard({ img, title, description }) {
  return (
    <div className="service-card">
      <img src={img} alt={title} className="service-card-img" />
      <div className="wrapper">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>
      </div>
    </div>
  );
}
