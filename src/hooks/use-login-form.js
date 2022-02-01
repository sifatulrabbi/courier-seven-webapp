import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

export function useLoginForm() {
  const [mobile, setMobile] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleMobileChange(e) {
    setMobile(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    login({
      name: {
        first: "Sifatul",
        last: "Rabbi",
      },
      email: "mdsifatulislam.rabbi@gmail.com",
    });
    setMobile("");
    setPassword("");
    navigate("/users/dashboard");
  }

  return {
    mobile,
    password,
    handleMobileChange,
    handlePasswordChange,
    handleSubmit,
  };
}
