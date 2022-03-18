import React from 'react';
import { useApi } from './use-api';
import { useLoading, useAlert } from '../contexts';
import { useNavigate } from 'react-router-dom';

const USER_DATA_KEY = 'user-registration-data';

export function useOTPForm() {
  const [otp, setOtp] = React.useState('');
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { registerUser, registerUserFinal, loginUser } = useApi();
  const { showAlert } = useAlert();

  function handleOTPChange(e) {
    setOtp(e.currentTarget.value);
  }

  async function resendOtp() {
    setLoading(true);
    try {
      let data = localStorage.getItem(USER_DATA_KEY);
      if (data) data = JSON.parse(data);
      const response = await registerUser(data);
      if (!response) {
        showAlert('Unable to sent OTP', 'error');
        setLoading(false);
        navigate('/register');
        return;
      }
      if (response.statusCode !== 200) showAlert(response.message, 'error');
      else {
        showAlert(response.message);
        data.verification_key = response.data[0].verification_key;
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.log(err);
      showAlert('Ops! Something went wrong');
    }
    setLoading(false);
  }

  async function handleSubmitOtp(e) {
    e.preventDefault();
    const savedData = localStorage.getItem(USER_DATA_KEY);
    const data = JSON.parse(savedData);
    data.token = otp;

    setLoading(true);
    const res = await registerUserFinal(data);
    if (res.statusCode !== 200) {
      setLoading(false);
      showAlert(res.message, 'error');
      return;
    }
    showAlert(res.message, 'normal');

    const user = await loginUser(data.email, data.password);
    if (user.statusCode !== 200) {
      showAlert(user.message, 'error');
      setLoading(false);
      return;
    }
    showAlert(user.message, 'normal');
    setLoading(false);
    navigate('/login');
  }

  return {
    otp,
    handleOTPChange,
    handleSubmitOtp,
    resendOtp,
  };
}
