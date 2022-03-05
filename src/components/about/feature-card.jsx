import React from 'react';
import { Card as BSCard, Col } from 'react-bootstrap';
import { BiBook } from 'react-icons/bi';

const FeatureCard = () => {
  return (
    <Col md='6' sm='6' xl='4' className='p-4' style={{ maxWidth: '20rem' }}>
      <BSCard className='text-center rounded bg-transparent border-1'>
        <BSCard.Body className='text-light'>
          <div className='mb-4 text-white'>
            <BiBook style={{ fontSize: '3rem' }} />
          </div>
          We do something which is awesome
        </BSCard.Body>
      </BSCard>
    </Col>
  );
};

export default FeatureCard;
