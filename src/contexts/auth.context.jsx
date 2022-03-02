import React from 'react';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => null,
  logout: () => null,
  user: {},
});

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);

  function login(user) {
    setUser(user);
    setIsAuthenticated(true);
    const cookie = document.cookie;
    console.log(cookie);
  }

  function logout() {
    setIsAuthenticated(false);
    setUser(null);
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
