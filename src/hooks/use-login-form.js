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
    let res;
    try {
      const result = await axios.post(url, { email, password });
      res = result.data;
      setEmail('');
      setPassword('');
      console.log(res.data[0]);
      login(res.data[0]);
      navigate('/users');
    } catch (err) {
      console.log(err);
    }
  }

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
}
