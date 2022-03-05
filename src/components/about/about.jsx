import React from 'react';
import { Container } from 'react-bootstrap';
import AboutFirstPart from './about-first-part';
import AboutLastPart from './about-last-part';

const About = () => {
  return (
    <Container fluid id='features' className='p-0 py-5'>
      <Container className='container-lg px-4'>
        <AboutFirstPart />
      </Container>
      <Container fluid className='p-0 bg-linear'>
        <Container className='container-lg mt-5 py-5 px-4'>
          <AboutLastPart />
        </Container>
      </Container>
    </Container>
  );
};

export default About;
