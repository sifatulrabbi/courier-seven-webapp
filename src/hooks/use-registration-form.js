import React from 'react';
import { useLocations } from './use-locations';
import { UseApi } from './use-api';

export function useRegistrationForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [division, setDivision] = React.useState('Dhaka');
  const [district, setDistrict] = React.useState('');
  const [upazila, setUpazila] = React.useState('');
  const [area, setArea] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [accountType, setAccountType] = React.useState('');
  const { getDivisions, getDistricts, getUpazilas } = useLocations();
  const divisions = getDivisions();
  const [districts, setDistricts] = React.useState(['']);
  const [upazilas, setUpazilas] = React.useState(['']);
  const functions = {};
  const useApi = new UseApi();

  React.useEffect(() => {
    setDistricts(getDistricts(division));
    setUpazilas(getUpazilas('Dhaka'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  functions.handleFirstName = function (e) {
    setFirstName(e.currentTarget.value);
  };

  functions.handleLastName = function (e) {
    setLastName(e.currentTarget.value);
  };

  functions.handleEmail = function (e) {
    setEmail(e.currentTarget.value);
  };
  functions.handleMobile = function (e) {
    setMobile(e.currentTarget.value);
  };

  functions.handlePassword = function (e) {
    setPassword(e.currentTarget.value);
  };

  functions.handleConfirmPassword = function (e) {
    setConfirmPassword(e.currentTarget.value);
  };

  functions.handleDivision = function (e) {
    setDivision(e.currentTarget.value);
    setDistricts(getDistricts(e.currentTarget.value));
  };

  functions.handleDistrict = function (e) {
    setDistrict(e.currentTarget.value);
    setUpazilas(getUpazilas(e.currentTarget.value));
  };
  functions.handleUpazila = function (e) {
    setUpazila(e.currentTarget.value);
  };

  functions.handleArea = function (e) {
    setArea(e.currentTarget.value);
  };

  functions.handleStreet = function (e) {
    setStreet(e.currentTarget.value);
  };

  functions.handleHouse = function (e) {
    setHouse(e.currentTarget.value);
  };

  functions.handleAccountType = function (e) {
    setAccountType(e.currentTarget.value);
  };

  functions.handleSubmit = function (e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Registration failed password mismatch');
      return;
    }

    const data = {
      first_name: firstName,
      last_name: lastName,
      account_type: accountType,
      email,
      password,
      mobile,
      district,
      division,
      upazila,
      area,
      street,
      house,
    };

    useApi.makeRequest('/auth/register', 'GET', data, (err, result) => {
      if (err) return console.log(err.message);
      if (!result) return console.log('Unable to register user');
      console.log(result);
    });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    accountType,
    division,
    district,
    upazila,
    street,
    area,
    house,
    divisions,
    districts,
    upazilas,
    mobile,
    ...functions,
  };
}
