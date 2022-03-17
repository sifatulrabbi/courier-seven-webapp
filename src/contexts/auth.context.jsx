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
  const [user, setUser] = React.useState(null);
  const { LOGIN_USER_KEY } = useConstants();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  function login(user) {
    setUser(user);
    saveUser(LOGIN_USER_KEY, user._id);
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
    setUser({ _id: '' });
    removeSavedUser(LOGIN_USER_KEY);
  }

  async function checkForUser() {
    setLoading(true);
    console.log('checking for user...');
    try {
      if (isAuthenticated) {
        setLoading(false);
        navigate('/users');
        return;
      }
      const userId = getSavedUser(LOGIN_USER_KEY);
      if (!userId) return setLoading(false);
      console.log(userId);
      const user = await useApi.getUserById(userId);
      if (user) {
        login(user.data[0]);
        setLoading(false);
        navigate('/users');
        return;
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  const context = {
    user,
    isAuthenticated,
    login,
    logout,
    checkForUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
