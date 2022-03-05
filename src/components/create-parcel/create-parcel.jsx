import React from 'react';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fields from './fields';
import CustomerInfo from './customer-info';
import ProductInfo from './product-info';

const CreateParcel = () => {
  return (
    <Container className='container-lg p-3'>
      <Form
        className='bg-white shadow rounded mx-auto b-block'
        style={{ maxWidth: 800 }}
      >
        <Row className='m-0 p-2'>
          <Fields />
          <CustomerInfo />
          <ProductInfo />
          <div className='p-2 d-flex justify-content-between mt-2'>
            <Link to='/'>
              <Button variant='outline-primary'>Cancel</Button>
            </Link>
            <Button type='submit'>Create</Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default CreateParcel;
