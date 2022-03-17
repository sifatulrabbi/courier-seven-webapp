/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocations } from './use-locations';
import { useApi } from './use-api';
import { useLoading } from '../contexts';
import { useNavigate } from 'react-router-dom';

const USER_DATA_KEY = 'user-registration-data';

export function useRegistrationForm() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [division, setDivision] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [upazila, setUpazila] = React.useState('');
  const [area, setArea] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [accountType, setAccountType] = React.useState('');
  const { getDivisions, getDistricts, getUpazilas } = useLocations();
  const divisions = [{ label: 'Select one' }, ...getDivisions()];
  const [districts, setDistricts] = React.useState(['']);
  const [upazilas, setUpazilas] = React.useState(['']);
  const functions = {};
  const { setLoading } = useLoading();
  const navigate = useNavigate();

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
  };

  functions.handleDistrict = function (e) {
    setDistrict(e.currentTarget.value);
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

  React.useEffect(() => {
    setDistricts([{ label: 'Select one' }, ...getDistricts(division)]);
  }, [division]);

  React.useEffect(() => {
    setUpazilas([{ label: 'Select one' }, ...getUpazilas(district)]);
  }, [district]);

  function resetInputs() {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setConfirmPassword('');
    setStreet('');
    setHouse('');
    setAccountType('');
    setDistrict('');
    setDivision('');
    setArea('');
  }

  functions.handleSubmit = function (e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Registration failed password mismatch');
      return;
    }
    const data = {
      name: {
        first: firstName,
        last: lastName,
      },
      account_type: accountType,
      confirm_password: confirmPassword,
      password,
      email,
      mobile,
      address: { district, division, upazila, area, street, house },
    };
    setLoading(true);
    useApi.makeRequest('/auth/register', 'POST', data, (err, result) => {
      resetInputs();
      setLoading(false);

      if (err) return console.log(err);
      if (!result) return console.log('Unable to register user');

      data.verification_key = result.data[0].verification_key;
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
      navigate('/register/otp');
    });
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
