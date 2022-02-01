import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ links }) {
  return (
    <div className="breadcrumb-container">
      {links.map((link) => (
        <Link to={link} className="link">
          /{link}
        </Link>
      ))}
    </div>
  );
}
