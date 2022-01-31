import React from "react";
import Button from "../button/button";
import { accountTypes, locations } from "../../assets";
import Dropdown from "../dropdown/dropdown";
import { useRegistrationForm } from "../../hooks";

const districtsList = locations.map((location) => location.district);

export default function RegistrationForm() {
  const [permanentAreas, setPermanentAreas] = React.useState([]);
  const [presentAreas, setPresentAreas] = React.useState([]);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    presentDistrict,
    presentArea,
    presentStreet,
    permanentDistrict,
    permanentArea,
    permanentStreet,
    accountType,
    updateAccountType,
    handleConfirmPasswordChange,
    handleEmailChange,
    handleFirstNameChange,
    handleLastNameChange,
    handleSubmit,
    handlePasswordChange,
    updatePermanentArea,
    updatePermanentDistrict,
    updatePermanentStreet,
    updatePresentArea,
    updatePresentDistrict,
    updatePresentStreet,
  } = useRegistrationForm();

  function handlePermanentDistrict(district) {
    updatePermanentDistrict(district);

    const obj = locations.filter((location) => location.district === district);
    setPermanentAreas(obj[0].areas);
  }

  function handlePresentDistrict(district) {
    updatePresentDistrict(district);

    const obj = locations.filter((location) => location.district === district);
    setPresentAreas(obj[0].areas);
  }

  return (
    <form action="submit" onSubmit={handleSubmit} className="page-form">
      <div className="form-group">
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          name="first-name"
          id="first-name"
          placeholder="Enter your first name"
          required
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          name="last-name"
          id="last-name"
          placeholder="Enter your last name"
          required
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter a strong password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Confirm password</label>
        <input
          type="confirm-password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Enter a strong password"
          required
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <Dropdown
        label="Account type"
        value={accountType}
        items={accountTypes}
        updateValue={updateAccountType}
      />
      <div className="form-wrapper">
        <h4 className="form-group-title">Permanent address</h4>
        <Dropdown
          label="District"
          value={permanentDistrict}
          items={districtsList}
          updateValue={handlePermanentDistrict}
        />
        <Dropdown
          label="Area"
          value={permanentArea}
          items={permanentAreas}
          updateValue={updatePermanentArea}
        />
        <div className="form-group">
          <label htmlFor="permanent-street">Permanent Street</label>
          <input
            type="text"
            name="permanent-street"
            id="permanent-street"
            required
            value={permanentStreet}
            onChange={updatePermanentStreet}
          />
        </div>
      </div>
      <div className="form-wrapper">
        <h4 className="form-group-title">Present address</h4>
        <Dropdown
          label="District"
          items={districtsList}
          value={presentDistrict}
          updateValue={handlePresentDistrict}
        />
        <Dropdown
          label="Area"
          items={presentAreas}
          value={presentArea}
          updateValue={updatePresentArea}
        />
        <div className="form-group">
          <label htmlFor="present-street">Present Street</label>
          <input
            type="text"
            name="present-street"
            id="present-street"
            required
            value={presentStreet}
            onChange={updatePresentStreet}
          />
        </div>
      </div>
      <Button label="Register" type="submit" big />
    </form>
  );
}
