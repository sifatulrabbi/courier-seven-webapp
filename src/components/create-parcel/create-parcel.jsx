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
        className='bg-white shadow-sm rounded mx-auto b-block'
        style={{ maxWidth: 800 }}
      >
        <Row className='m-0 p-2'>
          <Fields />
          <CustomerInfo />
          <ProductInfo />
        </Row>
        <div className='p-3 bg-light d-flex flex-column'>
          <p>
            Sending illegal products is completely prohibited. To learn more
            read our{' '}
            <Link to='#' className='text-center'>
              terms and service
            </Link>
          </p>
          <Form.Check
            type='checkbox'
            id='terms-policy'
            required
            label='I accept'
          />
        </div>
        <div className='p-3 d-flex justify-content-between mt-2'>
          <Link to='/'>
            <Button variant='outline-primary'>Cancel</Button>
          </Link>
          <Button type='submit'>Create</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CreateParcel;
