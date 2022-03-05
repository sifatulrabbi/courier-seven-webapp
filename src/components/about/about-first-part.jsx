import React from 'react';
import { Row } from 'react-bootstrap';
import Card from './card';

const AboutFirstPart = () => {
  return (
    <>
      <span className='subtitle'>Easy Process</span>
      <h2 className='h2 mb-4 text-bolder'>
        <span className='text-primary'>Three steps</span> to
        <br />
        Delivery your parcel
      </h2>
      <p style={{ maxWidth: '30rem' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel
        quod corrupti est quidem reiciendis quo recusandae cumque. Quaerat dolor
        fuga ut nihil at.
      </p>
      <Row className='justify-content-center mt-5'>
        <Card />
        <Card />
        <Card />
      </Row>
    </>
  );
};

export default AboutFirstPart;
