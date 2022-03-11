import React from 'react';
import { useConstants } from './index';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: function (user) {},
  logout: function () {},
  user: {},
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

  function login(user) {
    setUser(user);
    saveUser(LOGIN_USER_KEY, user._id);
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
    removeSavedUser(LOGIN_USER_KEY);
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
