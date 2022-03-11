import React from 'react';
import { LoadingScreen } from '../components';

const LoadingContext = React.createContext({
  loading: false,
  setLoading: function (value) {},
});

export const useLoading = () => {
  return React.useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <LoadingScreen />}
      {children}
    </LoadingContext.Provider>
  );
};
