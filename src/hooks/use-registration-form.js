import React from 'react';

export function useRegistrationForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [permanentDistrict, setPermanentDistrict] = React.useState('');
  const [permanentArea, setPermanentArea] = React.useState('');
  const [permanentStreet, setPermanentStreet] = React.useState('');
  const [presentDistrict, setPresentDistrict] = React.useState('');
  const [presentArea, setPresentArea] = React.useState('');
  const [presentStreet, setPresentStreet] = React.useState('');
  const [accountType, setAccountType] = React.useState('');

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

  function updatePresentDistrict(value) {
    setPresentDistrict(value);
  }

  function updatePresentArea(value) {
    setPresentArea(value);
  }

  function updatePresentStreet(e) {
    setPresentStreet(e.currentTarget.value);
  }

  function updatePermanentDistrict(value) {
    setPermanentDistrict(value);
  }

  function updatePermanentArea(value) {
    setPermanentArea(value);
  }

  function updatePermanentStreet(e) {
    setPermanentStreet(e.currentTarget.value);
  }

  function updateAccountType(value) {
    setAccountType(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Registration failed password mismatch');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPermanentDistrict('');
    setPermanentArea('');
    setPermanentStreet('');
    setPresentDistrict('');
    setPresentArea('');
    setPresentStreet('');
  }

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    presentDistrict,
    presentArea,
    presentStreet,
    permanentArea,
    permanentDistrict,
    permanentStreet,
    accountType,
    updateAccountType,
    handleFirstNameChange,
    handleLastNameChange,
    handlePasswordChange,
    handleEmailChange,
    handleConfirmPasswordChange,
    handleSubmit,
    updatePermanentArea,
    updatePermanentDistrict,
    updatePermanentStreet,
    updatePresentArea,
    updatePresentDistrict,
    updatePresentStreet,
  };
}
