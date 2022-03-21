/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useConstants, useLoading } from './index';
import { useApi } from '../hooks';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: function (user) {},
  logout: function () {},
  checkForUser: async function () {},
  user: { _id: '' },
});

function saveUser(key, userId) {
  localStorage.setItem(key, userId);
}

function removeSavedUser(key) {
  localStorage.removeItem(key);
}

function getSavedUser(key) {
  return localStorage.getItem(key);
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const { LOGIN_USER_KEY } = useConstants();
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const { setLoading } = useLoading();
  const navigate = useNavigate();
  const { getUserProfile } = useApi();

  function login(token, user) {
    setToken(token);
    saveUser(LOGIN_USER_KEY, token);
    setUser(user);
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
    setToken(null);
    removeSavedUser(LOGIN_USER_KEY);
  }

  async function checkForUser() {
    setLoading(true);
    try {
      if (isAuthenticated) {
        setLoading(false);
        navigate('/users');
        return;
      }
      const savedToken = getSavedUser(LOGIN_USER_KEY);
      if (!savedToken) return setLoading(false);
      const data = await getUserProfile(savedToken);
      if (!data) {
        removeSavedUser(LOGIN_USER_KEY);
        setLoading(false);
        return;
      }
      login(savedToken, data.data[0]);
      setLoading(false);
      navigate('/users');
    } catch (err) {
      removeSavedUser(LOGIN_USER_KEY);
      setLoading(false);
    }
  }

  const context = {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    checkForUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
