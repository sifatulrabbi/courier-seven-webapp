import React from 'react';
import { Card as BSCard, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Card() {
  return (
    <Col md='6' sm='6' xl='4' className='p-4' style={{ maxWidth: '24rem' }}>
      <BSCard className='bg-gray border-0 shadow'>
        <BSCard.Header className='bg-gray border-0'>
          <span className='subtitle'>001</span>
        </BSCard.Header>
        <BSCard.Body>
          <BSCard.Title>Register as a user</BSCard.Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit accusantium
            adipisicing elit
          </p>
          <Link to='/' className='fw-bold'>
            Learn More
          </Link>
        </BSCard.Body>
      </BSCard>
    </Col>
  );
}

export default Card;
