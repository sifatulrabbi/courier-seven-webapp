import React from "react";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="registration-page">
      <header>
        <h2 className="page-title">Registration</h2>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
}
