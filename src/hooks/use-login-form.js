import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';
import axios from 'axios';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const url = process.env.REACT_APP_PROXY + '/auth/login';

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await axios.post(url, { email, password });
    const res = result.data;
    if (res.status !== 200 && res.error) {
      console.log('Login failed');
    }

    login({
      name: {
        first: 'Sifatul',
        last: 'Rabbi',
      },
      email: 'mdsifatulislam.rabbi@gmail.com',
    });
    setEmail('');
    setPassword('');
    navigate('/users/dashboard');
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
