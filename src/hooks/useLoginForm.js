import React from "react";

export default function useLoginForm() {
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleMobileChange(e) {
    setMobile(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ mobile, password });

    setMobile("");
    setPassword("");
  }

  return {
    mobile,
    password,
    handleMobileChange,
    handlePasswordChange,
    handleSubmit,
  };
}
