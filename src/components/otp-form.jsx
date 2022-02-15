import React from "react";
import Button from "./button";
import { useOTPForm } from "../hooks";

export default function OTPForm({ setOtpVerified }) {
  const {
    mobile,
    otp,
    nextStep,
    handleMobileChange,
    handleOTPChange,
    handleSubmitMobile,
    handleSubmitOtp,
  } = useOTPForm(setOtpVerified);

  return (
    <div className="otp-verification">
      {!nextStep ? (
        <form
          action="submit"
          className="page-form"
          onSubmit={handleSubmitMobile}
        >
          <div className="form-control">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              required
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={handleMobileChange}
            />
          </div>
          <Button label="Get OTP" type="submit" big />
        </form>
      ) : (
        <form className="page-form" action="submit" onSubmit={handleSubmitOtp}>
          <div className="form-control">
            <label htmlFor="otp" className="form-label">
              OTP
            </label>
            <input
              type="number"
              name="otp"
              id="otp"
              required
              placeholder="Enter the OTP"
              value={otp}
              onChange={handleOTPChange}
            />
          </div>
          <Button label="Verify" type="submit" big />
        </form>
      )}
    </div>
  );
}
