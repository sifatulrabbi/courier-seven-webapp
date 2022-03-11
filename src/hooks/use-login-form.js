import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useLoading } from '../contexts';
import { UseApi } from './use-api';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  const { makeRequest } = new UseApi();
  const { setLoading } = useLoading();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    makeRequest('/auth/login', 'POST', { email, password }, (err, result) => {
      logout();
      if (err) return console.error(err.message);
      if (!result) return console.error('No user found');
      login(result.data[0]);
      console.log(result);
      setLoading(false);
    });
    setEmail('');
    setPassword('');
    navigate('/users');
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
