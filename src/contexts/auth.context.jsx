import React from 'react';
import { useApi } from '../hooks';
import { useConstants } from './index';
import { useLoading } from './loading-context';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: function (user) {},
  logout: function () {},
  user: { _id: '' },
});

function saveUser(key, userId) {
  localStorage.setItem(key, userId);
}

function removeSavedUser(key) {
  localStorage.removeItem(key);
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const { LOGIN_USER_KEY } = useConstants();
  const { setLoading } = useLoading();

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
    const user = await useApi.getUserById();
  }

  const context = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
