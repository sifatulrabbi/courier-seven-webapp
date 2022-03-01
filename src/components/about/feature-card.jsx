import React from 'react';
import { Card as BSCard, Col } from 'react-bootstrap';
import { BiBook } from 'react-icons/bi';

const FeatureCard = () => {
  return (
    <Col md='6' sm='6' xl='4' style={{ maxWidth: '24rem' }}>
      <BSCard className='border-0 text-center'>
        <BSCard.Body>
          <div className='mb-4 text-secondary'>
            <BiBook style={{ fontSize: '3rem' }} />
          </div>
          <BSCard.Title>We do something which is awesome</BSCard.Title>
        </BSCard.Body>
      </BSCard>
    </Col>
  );
};

export default FeatureCard;
