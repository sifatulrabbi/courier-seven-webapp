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
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const { setLoading } = useLoading();

  function login(user) {
    setUser(user);
    saveUser(user._id);
    setIsAuthenticated(true);
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
