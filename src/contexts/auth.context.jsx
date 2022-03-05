import React from 'react';
import { useLoading } from '.';
import { makeFetch } from '../utils/make-fetch';

const SAVED_USER_KEY = 'Courier-007-user';
const AuthContext = React.createContext({
  isAuthenticated: false,
  login: async (email, password) => false,
  logout: function () {},
  getUser: function () {},
  user: {},
});

function saveUser(userId) {
  localStorage.setItem(SAVED_USER_KEY, userId);
}

function getSavedUser() {
  return localStorage.getItem(SAVED_USER_KEY);
}

function removeSavedUser() {
  localStorage.removeItem(SAVED_USER_KEY);
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const [user, setUser] = React.useState(null);
  const { setLoading } = useLoading();

  async function login(email, password) {
    setLoading(true);
    let success;

    try {
      const data = await makeFetch('/auth/login', 'POST', { email, password });
      if (data) {
        setUser(data.data[0]);
        setIsAuthenticated(true);
        saveUser(data.data[0]._id);
        success = true;
      }
      if (!data) {
        setUser(null);
        setIsAuthenticated(false);
        removeSavedUser();
        success = false;
      }
    } catch (err) {
      console.log(err);
      setUser(null);
      setIsAuthenticated(false);
      removeSavedUser();
      success = false;
    }

    setLoading(false);
    return success;
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    removeSavedUser();
  }

  async function getUser() {
    setLoading(true);
    const userId = getSavedUser();
    let success;

    try {
      const res = await makeFetch(`/users/${userId}`, 'GET', {});
      if (!res) {
        logout();
        success = false;
      }
      if (res) {
        setIsAuthenticated(true);
        setUser(res.data[0]);
        saveUser(res.data[0]._id);
        success = true;
      }
    } catch (err) {
      logout();
      success = false;
    }

    setLoading(false);
    return success;
  }

  const context = {
    user,
    isAuthenticated,
    login,
    logout,
    getUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
