import React from 'react';
import { UseApi } from './use-api';

export function useOTPForm() {
  const [otp, setOtp] = React.useState('');

  function handleOTPChange(e) {
    setOtp(e.currentTarget.value);
  }

  function handleSubmitOtp(e) {
    e.preventDefault();
    const useApi = new UseApi();
    const savedData = localStorage.getItem('user-registration-data');
    const data = JSON.parse(savedData);
    data.verification_key =
      '$2b$10$CBPg.O333Xl/68qgDgjkYOagipwwRDdhW/xn5v753ksFfxrvJJ80C';
    data.token = '438975';
    useApi.makeRequest('/auth/register/final', 'POST', data, (err, result) => {
      if (err) return console.error(err);
      if (!result) return console.error('unable to creat user');
      console.log(result);
    });
  }

  return {
    otp,
    handleOTPChange,
    handleSubmitOtp,
  };
}
