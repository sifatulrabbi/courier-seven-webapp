import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useAlert } from '../contexts';
import { useApi } from './use-api';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showAlert } = useAlert();
  const { loginUser } = useApi();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const user = await loginUser(email, password);
    if (user.statusCode === 200) {
      login(user.data[0]);
      showAlert('User logged in', 'normal');
      setEmail('');
      setPassword('');
      navigate('/users');
      return;
    }
    showAlert(user.message, 'error');
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
