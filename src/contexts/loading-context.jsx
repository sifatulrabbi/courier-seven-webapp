import React from 'react';
import { Container } from 'react-bootstrap';

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
        <Container
          fluid
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100vh' }}
        >
          <h1>Loading...</h1>
        </Container>
      ) : (
        children
      )}
    </LoadingContext.Provider>
  );
};
