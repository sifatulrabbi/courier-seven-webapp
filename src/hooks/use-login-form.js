import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

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

    await login(email, password);
    // if (!success) return;
    console.log(email, password);
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
