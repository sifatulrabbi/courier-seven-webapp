import React from "react";
import { Link } from "react-router-dom";
import { Navbar, LoginForm, Footer } from "../../components";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="registration-page">
        <header className="header">
          <h2 className="page-title">Login</h2>
          <Link to="/registration" className="header-link">
            Register
          </Link>
        </header>
        <main>
          <LoginForm />
        </main>
      </div>
      <Footer />
    </>
  );
}
