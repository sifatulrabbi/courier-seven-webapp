import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import FormGroup from '../form-group';
import { useNavigate, Link } from 'react-router-dom';
import { accountTypes } from '../../assets';
import { useLocations } from '../../hooks';

export const PrimaryRegForm = ({ callBack }) => {
  const navigate = useNavigate();
  const { divisions } = useLocations();

  function handleSubmit(e) {
    e.preventDefault();
    if (callBack) callBack();
    navigate('/register/otp');
  }

  return (
    <Form
      action='submit'
      className='bg-white rounded p-3 shadow-sm mx-auto'
      style={{ maxWidth: '750px' }}
      onSubmit={handleSubmit}
    >
      <Row>
        <Col sm='12' lg='12'>
          <FormGroup
            name='email'
            label='Email'
            type='email'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='mobile'
            label='Mobile'
            type='number'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='account_type'
            label='Account Type'
            required
            select
            options={accountTypes}
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='password'
            label='Password'
            type='password'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='confirm_password'
            label='Confirm password'
            type='password'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='first_name'
            label='First Name'
            type='text'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='last_name'
            label='Last Name'
            type='text'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='division'
            label='Division'
            required
            select
            options={divisions()}
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='district'
            label='District'
            required
            select
            options={divisions()}
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='upazila'
            label='Upazila'
            required
            select
            options={divisions()}
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='area'
            label='Area'
            type='text'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='street'
            label='Street'
            type='text'
            required
            className='mb-3'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='house'
            label='House'
            type='text'
            required
            className='mb-3'
          />
        </Col>
      </Row>
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Link to='/login'>
          <Button variant='secondary'>Login</Button>
        </Link>
        <Button type='submit'>Next</Button>
      </Container>
    </Form>
  );
};
