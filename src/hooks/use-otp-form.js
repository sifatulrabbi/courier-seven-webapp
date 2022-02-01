import React from "react";

export function useOTPForm(setOtpVerified) {
  const [mobile, setMobile] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [nextStep, setNextStep] = React.useState(false);

  function handleMobileChange(e) {
    setMobile(e.currentTarget.value);
  }

  function handleOTPChange(e) {
    setOtp(e.currentTarget.value);
  }

  function handleSubmitMobile(e) {
    e.preventDefault();
    setNextStep(true);
  }

  function handleSubmitOtp(e) {
    e.preventDefault();
    setOtpVerified(true);
  }

  return {
    mobile,
    otp,
    nextStep,
    handleMobileChange,
    handleOTPChange,
    handleSubmitMobile,
    handleSubmitOtp,
  };
}
