import React from "react";
import Button from "../button/button";
import { useLoginForm } from "../../hooks";

export default function LoginForm() {
  const {
    mobile,
    password,
    handleMobileChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form className="page-form" action="submit" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="mobile" className="form-label">
          Mobile
        </label>
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={handleMobileChange}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <Button label="Login" type="submit" big />
    </form>
  );
}
