import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, useAlert, useLoading } from '../contexts';
import { useApi } from './use-api';

export function useLoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { showAlert } = useAlert();
  const { loginUser, getUserProfile } = useApi();
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
    const res = await loginUser(email, password);
    if (res.statusCode !== 200) {
      showAlert(res.message, 'error');
      setLoading(false);
      return;
    }
    const userData = await getUserProfile(res.data[0].token);
    console.log(userData);
    if (!userData) {
      showAlert('No user profile found please login again', 'error');
      setLoading(false);
    }
    if (userData.statusCode !== 200) {
      showAlert('No user profile found please login again', 'error');
      setLoading(false);
    }
    login(res.data[0].token, userData.data[0]);
    showAlert('User logged in', 'normal');
    setLoading(false);
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
