import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';
import { useApi } from './use-api';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    useApi.makeRequest(
      '/auth/login',
      'POST',
      { email, password },
      (err, result) => {
        if (err) return console.error(err);
        if (!result) return console.error('No user found');
        login(result.data[0]);
        setEmail('');
        setPassword('');
        navigate('/users');
      }
    );
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
