import React from "react";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../components";

export default function Registration() {
  return (
    <div className="registration-page">
      <header className="header">
        <h2 className="page-title">Registration</h2>
        <Link to="/login" className="header-link">
          Login
        </Link>
      </header>
      <main>
        <RegistrationForm />
      </main>
    </div>
  );
}
