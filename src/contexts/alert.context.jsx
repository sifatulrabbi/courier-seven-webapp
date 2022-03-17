import React from 'react';

const AlertContext = React.createContext({
  alert: null,
  showAlert: function (msg, severity) {},
});

export function useAlert() {
  return React.useContext(AlertContext);
}

export function AlertProvider({ children }) {
  const [alert, setAlert] = React.useState(null);

  function showAlert(msg, severity) {
    setAlert({ msg, severity });
  }

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
