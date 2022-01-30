import React from "react";

export default function useRegistrationForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [permanentAddress, setPermanentAddress] = React.useState("");
  const [presentAddress, setPresentAddress] = React.useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.currentTarget.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.currentTarget.value);
  }

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.currentTarget.value);
  }

  function handlePermanentAddressChange(e) {
    setPermanentAddress(e.currentTarget.value);
  }

  function handlePresentAddressChange(e) {
    setPresentAddress(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Registration failed password mismatch");
    }

    console.log({
      name: { firstName, lastName },
      email,
      password,
      presentAddress,
      permanentAddress,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPermanentAddress("");
    setPresentAddress("");
  }

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    permanentAddress,
    presentAddress,
    handleFirstNameChange,
    handleLastNameChange,
    handlePasswordChange,
    handleEmailChange,
    handleConfirmPasswordChange,
    handlePermanentAddressChange,
    handlePresentAddressChange,
    handleSubmit,
  };
}
