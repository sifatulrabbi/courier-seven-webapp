import React from "react";

const AuthContext = React.createContext({
  isAuthenticated: () => null,
  getUser: () => null,
});

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authStatus, setAuthStatus] = React.useState(false);
  const [user, setUser] = React.useState({
    name: {
      first: "Sifatul",
      last: "Rabbi",
    },
    mobile: "+8801882070400",
    email: "mdsifatulislam.rabbi@gmail.com",
    accountType: "diamond",
    presentAddress: {
      district: "Dhaka",
      area: "Kamrangirchar",
      street: "Chad Mosjid, Jom Jom House",
    },
    permanentAddress: {
      district: "Dhaka",
      area: "Kamrangirchar",
      street: "Chad Mosjid, Jom Jom House",
    },
  });

  async function getUser() {
    return user;
  }

  async function isAuthenticated() {
    return authStatus;
  }

  const context = {
    getUser,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
