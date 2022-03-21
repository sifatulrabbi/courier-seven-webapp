import axios from 'axios';

export function useApi() {
  const url = process.env.REACT_APP_PROXY_URL;
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'applications/json',
  };
  const functions = {};

  functions.registerUser = async function ({ email }) {
    try {
      const response = await fetch(url + '/auth/register', {
        method: 'POST',
        headers,
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  functions.loginUser = async function (email, password) {
    try {
      const response = await fetch(url + '/auth/login', {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log('error', err);
      return null;
    }
  };

  /**
   * @param {string} token
   * @returns {Promise<{} | null>}
   */
  functions.getUserProfile = async function (token) {
    try {
      const path = url + '/users/profile';
      const response = await fetch(path, {
        headers: {
          ...headers,
          authorization: 'bearer ' + token,
        },
        method: 'GET',
      });
      if (!response.ok) return null;
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  functions.logoutUser = async function () {
    try {
      const path = url + '/auth/logout';
      const response = await fetch(path, {
        headers,
        method: 'POST',
        credentials: 'include',
        body: '',
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  functions.registerUserFinal = async function (data) {
    try {
      const result = await axios.post(url + '/auth/register/final', data);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return functions;
}
