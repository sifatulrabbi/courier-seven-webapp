import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleEmailChange(e) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.currentTarget.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await login(email, password);
    // if (!success) return;

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
