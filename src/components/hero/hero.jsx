import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeroRight from './hero-right';
import HeroLeft from './hero-left';

const Hero = () => {
  return (
    <Container
      fluid
      className='bg-linear d-flex align-items-center text-white'
      style={{ paddingTop: '7rem', paddingBottom: '2rem', minHeight: '90vh' }}
    >
      <Container className='container-lg px-4'>
        <Row className='align-items-center'>
          <HeroRight />
          <HeroLeft />
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
