import React from 'react';

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
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};
