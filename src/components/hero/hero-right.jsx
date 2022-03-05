import React from 'react';
import { Col } from 'react-bootstrap';
import { heroImg } from '../../assets';

const HeroRight = () => {
  return (
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
  );
};

export default HeroRight;
