import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts';

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
    /**
     * @type {{statusNumber: number, message: string, data: [], errors: []}} res
     */
    let res;
    /**
     * @type {Response} result
     */
    let result;
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      result = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        credentials: 'include', // Don't forget to specify this if you need cookies
        headers: headers,
        body: JSON.stringify({
          email,
          password,
        }),
      });
      res = await result.json();

      if (result.status !== 200) {
        console.error(res);
        return;
      }

      setEmail('');
      setPassword('');
      login(res.data[0]);
      navigate('/users');
    } catch (err) {
      console.error(err);
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
