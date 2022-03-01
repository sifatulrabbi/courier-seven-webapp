import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { heroImg } from '../assets';

const Hero = () => {
  return (
    <Container
      fluid
      className='bg-linear d-flex align-items-center text-white'
      style={{ paddingTop: '7rem', paddingBottom: '2rem', minHeight: '90vh' }}
    >
      <Container className='container-lg px-4'>
        <Row className='align-items-center'>
          <Col
            lg='6'
            className='d-flex flex-column justify-content-center text-center text-lg-start'
          >
            <h1 className='display-3 text-bolder'>
              Deliver your products as fast as the sparkle of thunder
            </h1>
            <Link
              to='/login'
              className='align-self-center align-self-lg-start mt-5'
            >
              <Button
                variant='light'
                className='hero-btn mb-5'
                style={{ width: '150px' }}
              >
                Login
              </Button>
            </Link>
          </Col>
          <Col
            lg='6'
            className='d-flex align-items-center justify-content-center justify-content-lg-end p-0'
          >
            <img
              src={heroImg}
              alt='hero'
              style={{ width: 'clamp(300px, 80vw, 500px)', height: 'auto' }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
