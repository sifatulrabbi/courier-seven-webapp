import React from 'react';
import { Container } from 'react-bootstrap';
import ChooseShop from './choose-shop';
import OrderDetails from './order-details';

const Aside = () => {
  return (
    <Container
      fluid
      className='p-0 d-flex flex-column'
      style={{ gridGap: '2rem' }}
    >
      <ChooseShop />
      <OrderDetails />
    </Container>
  );
};

export default Aside;
