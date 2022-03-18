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
      const res = await fetch(url + '/auth/login', {
        headers,
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  functions.getUserById = async function (userId) {
    try {
      const path = url + '/users/' + userId;
      const response = await fetch(path, {
        headers,
        method: 'GET',
        credentials: 'include',
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
      const path = url + '/auth/register/final';
      const response = await fetch(path, {
        headers,
        method: 'POST',
        credentials: 'include',
        data: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return functions;
}
