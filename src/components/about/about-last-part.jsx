import React from 'react';
import { Row } from 'react-bootstrap';
import FeatureCard from './feature-card';

const AboutLastPart = () => {
  return (
    <Row className='justify-content-center'>
      <h2 className='h2 text-center text-bolder mb-5 text-white'>
        Our Promises
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
