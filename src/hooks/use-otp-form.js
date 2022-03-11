import React from 'react';
import { useApi } from './use-api';
import { useLoading } from '../contexts';
import { useNavigate } from 'react-router-dom';

const USER_DATA_KEY = 'user-registration-data';

export function useOTPForm() {
  const [otp, setOtp] = React.useState('');
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  function handleOTPChange(e) {
    setOtp(e.currentTarget.value);
  }

  function handleSubmitOtp(e) {
    e.preventDefault();
    const savedData = localStorage.getItem(USER_DATA_KEY);
    const data = JSON.parse(savedData);
    data.token = otp;
    setLoading(true);
    useApi.makeRequest('/auth/register/final', 'POST', data, (err, result) => {
      setLoading(false);
      if (err) return console.error(err);
      if (!result) return console.error('unable to creat user');
      localStorage.removeItem(USER_DATA_KEY);
      navigate('/login');
    });
  }

  return {
    otp,
    handleOTPChange,
    handleSubmitOtp,
  };
}
