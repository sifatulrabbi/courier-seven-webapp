import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import FormGroup from './form-group';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

const fields = [
  {
    type: 'number',
    id: 'collection-amount',
    name: 'collection_amount',
    label: 'Collection Amount',
    required: true,
  },
  {
    select: true,
    id: 'pickup-district',
    name: 'pickup_district',
    label: 'Pickup District',
    required: true,
    options: ['Dhaka', 'Gazipur'],
  },
  {
    select: true,
    id: 'pickup-sub-district',
    name: 'pickup_sub_district',
    label: 'Pickup Sub District',
    required: true,
    options: ['Dhanmondi', 'Kamrangirchar'],
  },
  {
    id: 'pickup-area',
    name: 'pickup_area',
    label: 'Pickup Area',
    type: 'text',
    required: true,
  },
  {
    id: 'pickup-area',
    name: 'pickup_area',
    label: 'Pickup Location details',
    type: 'text',
    required: true,
  },
];

const fieldsCustomer = [
  {
    type: 'text',
    id: 'customer-name',
    name: 'customer_name',
    label: 'Customer Name',
    required: true,
  },
  {
    type: 'number',
    id: 'customer-mobile',
    name: 'customer_mobile',
    label: 'Customer Mobile',
    required: true,
  },
  {
    select: true,
    id: 'customer-district',
    name: 'customer_district',
    label: 'Customer District',
    required: true,
    options: ['Dhaka', 'Gazipur'],
  },
  {
    select: true,
    id: 'customer-sub-district',
    name: 'customer_sub_district',
    label: 'Customer District',
    required: true,
    options: ['Dhanmondi', 'Kamrangirchar'],
  },
  {
    id: 'customer-area',
    name: 'customer_area',
    label: 'Customer Area',
    type: 'text',
    required: true,
  },
  {
    id: 'customer-area',
    name: 'customer_area',
    label: 'Customer Location Details',
    type: 'text',
    required: true,
  },
];

const fieldsProduct = [
  {
    type: 'number',
    id: 'product-price',
    name: 'product_price',
    label: 'Product Price',
    required: true,
  },
  {
    type: 'number',
    id: 'product-mobile',
    name: 'product_weight',
    label: 'Product Weight',
    required: true,
  },
  {
    select: true,
    id: 'product-type',
    name: 'product_type',
    required: true,
    label: 'Product Type',
    options: ['Fragile', 'Solid', 'Liquid'],
  },
];

const CreateParcel = () => {
  return (
    <Container className='container-lg p-3'>
      <Form
        className='bg-white shadow rounded mx-auto b-block'
        style={{ maxWidth: 800 }}
      >
        <Row className='m-0 p-2'>
          {fields.map(
            ({ name, type, id, label, required, select, options }) => (
              <Col key={v4()} sm='12' lg='6' className='p-2'>
                <FormGroup
                  id={id}
                  name={name}
                  type={type}
                  label={label}
                  required={required}
                  select={select}
                  options={options}
                />
              </Col>
            )
          )}
          <Col sm='12' lg='6' className='p-2'>
            <Form.Check
              type='checkbox'
              id='terms-policy'
              required
              label='Accept our terms and policy text will be here'
            />
          </Col>
          <span className='h6 d-block mt-5 mb-3 text-center'>
            Customer information
          </span>
          {fieldsCustomer.map(
            ({ name, type, id, label, required, select, options }) => (
              <Col key={v4()} sm='12' lg='6' className='p-2'>
                <FormGroup
                  id={id}
                  name={name}
                  type={type}
                  label={label}
                  required={required}
                  select={select}
                  options={options}
                />
              </Col>
            )
          )}
          <span className='h6 d-block mt-5 mb-3 text-center'>
            Product information
          </span>
          {fieldsProduct.map(
            ({ name, type, id, label, required, select, options }) => (
              <Col key={v4()} sm='12' lg='6' className='p-2'>
                <FormGroup
                  id={id}
                  name={name}
                  type={type}
                  label={label}
                  required={required}
                  select={select}
                  options={options}
                />
              </Col>
            )
          )}
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
