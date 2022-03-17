import React from 'react';
import { Container } from 'react-bootstrap';
import { brand } from '../assets';

export const LoadingScreen = () => {
  return (
    <Container fluid className='loading-screen'>
      <img src={brand} alt='Courier Seven' height='80' className='logo' />
    </Container>
  );
};
