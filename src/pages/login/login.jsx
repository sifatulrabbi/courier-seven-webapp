import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="registration-page">
      <header className="header">
        <h2 className="page-title">Login</h2>
        <Link to="/registration" className="header-link">
          Register
        </Link>
      </header>
      <main></main>
    </div>
  );
}
