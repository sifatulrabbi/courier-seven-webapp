import React from 'react';
import { Row } from 'react-bootstrap';
import FeatureCard from './feature-card';

const AboutLastPart = () => {
  return (
    <Row className='my-5 pt-5 justify-content-center'>
      <h2 className='h2 text-center text-bolder mb-5'>
        Our <span className='text-primary'>Promises</span>
        <br />
        are realistic
      </h2>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </Row>
  );
};

export default AboutLastPart;
