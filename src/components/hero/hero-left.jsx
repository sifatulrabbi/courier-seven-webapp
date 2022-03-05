import React from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeroLeft = () => {
  return (
    <Col
      lg='6'
      className='d-flex flex-column justify-content-center text-center text-lg-start'
    >
      <h1 className='display-3 text-bolder'>
        Deliver your products as fast as the sparkle of thunder
      </h1>
      <Container fluid className='p-0 my-5 d-flex flex-column d-lg-block'>
        <Link
          to='/login'
          className='align-self-center align-self-lg-start mt-5'
        >
          <Button
            variant='light'
            className='hero-btn mb-4 mb-lg-0'
            style={{ width: '150px' }}
          >
            Login
          </Button>
        </Link>
        <Link to='/register'>
          <Button
            variant='secondary'
            className='hero-btn mx-lg-4'
            style={{ width: '150px' }}
          >
            Register
          </Button>
        </Link>
      </Container>
    </Col>
  );
};

export default HeroLeft;
