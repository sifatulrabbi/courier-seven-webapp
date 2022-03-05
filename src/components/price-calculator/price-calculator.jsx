import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CalculatorForm from './calculator-form';

const PriceCalculator = () => {
  return (
    <Container fluid id='pricing' className='py-5 bg-gray'>
      <Container className='container-lg'>
        <Row>
          <Col sm='12' lg='6' className='mb-5'>
            <span className='subtitle'>Calculate Charge</span>
            <h2 className='h2 mb-4 text-bolder'>
              <span className='text-primary'>Plan ahead</span> with
              <br />
              the calculator
            </h2>
          </Col>
          <Col>
            <Container fluid className='bg-white p-3 rounded shadow-sm'>
              <CalculatorForm />
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PriceCalculator;
