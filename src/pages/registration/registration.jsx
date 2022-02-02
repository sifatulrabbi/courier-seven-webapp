import React from "react";
import { Link } from "react-router-dom";
import { OTPForm, RegistrationForm } from "../../components";

export default function Registration() {
  const [nextStep, setNextStep] = React.useState(false);

  return (
    <div className="registration-page page-container">
      <header className="header">
        <h2 className="page-title">Registration</h2>
        <Link to="/login" className="header-link">
          Login
        </Link>
      </header>
      <main>
        <div className="steps">
          <div className={`step ${nextStep ? "inactive" : "active"}`}>OTP</div>
          <div className={`step ${nextStep ? "active" : "inactive"}`}>
            Register
          </div>
        </div>
        {!nextStep ? (
          <OTPForm setOtpVerified={setNextStep} />
        ) : (
          <RegistrationForm />
        )}
      </main>
    </div>
  );
}
