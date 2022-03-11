import React from 'react';

const ConstantsContext = React.createContext({
  LOGIN_USER_KEY: '',
  REGISTER_USER_KEY: '',
});

export function useConstants() {
  return React.useContext(ConstantsContext);
}

export function ConstantsProvider({ children }) {
  const LOGIN_USER_KEY = 'Courier_007__login_user_id';
  const REGISTER_USER_KEY = 'Courier_007__user_registration_data';

  return (
    <ConstantsContext.Provider
      value={{
        LOGIN_USER_KEY,
        REGISTER_USER_KEY,
      }}
    >
      {children}
    </ConstantsContext.Provider>
  );
}
