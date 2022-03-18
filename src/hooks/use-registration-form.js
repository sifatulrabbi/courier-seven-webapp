/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useLocations } from './use-locations';
import { useApi } from './use-api';
import { useLoading } from '../contexts';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../contexts';

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
  const [thana, setThana] = React.useState('');
  const [area, setArea] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [house, setHouse] = React.useState('');
  const [accountType, setAccountType] = React.useState('');
  const { getDistricts, getUpazilas } = useLocations();
  const [districts, setDistricts] = React.useState(['']);
  const [upazilas, setUpazilas] = React.useState(['']);
  const functions = {};
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { registerUser } = useApi();

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

  functions.handleThana = function (e) {
    setThana(e.currentTarget.value);
  };

  React.useEffect(() => {
    setDistricts([{ label: 'Select one' }, ...getDistricts()]);
  }, []);

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
    setArea('');
  }

  functions.handleSubmit = async function (e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      showAlert('Your passwords are incorrect', 'error');
      return;
    }
    setLoading(true);
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
    const user = await registerUser(data);
    setLoading(false);
    if (!user) {
      showAlert('Ops! Something went wrong', 'error');
      return;
    }
    if (user.statusCode !== 200) {
      showAlert(user.message, 'error');
      return;
    }
    data.verification_key = user.data[0].verification_key;
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
    resetInputs();
    navigate('/register/otp');
  };

  return {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    accountType,
    district,
    upazila,
    street,
    area,
    house,
    districts,
    upazilas,
    mobile,
    thana,
    ...functions,
  };
}
