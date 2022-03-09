import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackingForm from './tracking-form';
import ProductsDetails from './product-details';
import ProductTracking from './product-tracking';

const TrackingPage = () => {
  return (
    <Container className='container-lg p-4'>
      <Row className='g-5'>
        <Col lg='6'>
          <h2 className='mb-3'>Products details</h2>
          <TrackingForm />
          <ProductsDetails />
        </Col>
        <Col className='w-100'>
          <h4 className='fw-bold'>Tracking</h4>
          <ProductTracking />
        </Col>
      </Row>
    </Container>
  );
};

export default TrackingPage;
