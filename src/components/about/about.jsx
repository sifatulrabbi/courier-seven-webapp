import React from 'react';
import { Container } from 'react-bootstrap';
import AboutFirstPart from './about-first-part';
import AboutLastPart from './about-last-part';

const About = () => {
  return (
    <Container id='features' className='container-lg py-5 px-4'>
      <AboutFirstPart />
      <AboutLastPart />
    </Container>
  );
};

export default About;
