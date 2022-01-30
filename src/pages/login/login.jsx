import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="registration-page">
      <header>
        <h2 className="page-title">Login</h2>
        <Link to="/registration">Register</Link>
      </header>
    </div>
  );
}
