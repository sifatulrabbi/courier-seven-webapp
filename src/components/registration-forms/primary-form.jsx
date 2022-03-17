import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import FormGroup from '../form-group';
import { Link } from 'react-router-dom';
import { accountTypes } from '../../assets';
import { useRegistrationForm } from '../../hooks';

export const PrimaryRegForm = () => {
  const form = useRegistrationForm();

  return (
    <Form
      action='submit'
      className='bg-white rounded p-3 shadow-sm mx-auto'
      style={{ maxWidth: '750px' }}
      onSubmit={form.handleSubmit}
    >
      <Row>
        <Col sm='12' lg='12' className='text-center'>
          <p>Personal information</p>
        </Col>
        <Col sm='12' lg='12'>
          <FormGroup
            name='email'
            label='Email'
            type='email'
            required
            className='mb-3'
            value={form.email}
            onChange={form.handleEmail}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='mobile'
            label='Mobile'
            type='number'
            required
            className='mb-3'
            value={form.mobile}
            onChange={form.handleMobile}
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
            value={form.accountType}
            onChange={form.handleAccountType}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='password'
            label='Password'
            type='password'
            required
            className='mb-3'
            value={form.password}
            onChange={form.handlePassword}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='confirm_password'
            label='Confirm password'
            type='password'
            required
            className='mb-3'
            value={form.confirmPassword}
            onChange={form.handleConfirmPassword}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='first_name'
            label='First Name'
            type='text'
            required
            className='mb-3'
            value={form.firstName}
            onChange={form.handleFirstName}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='last_name'
            label='Last Name'
            type='text'
            required
            className='mb-3'
            value={form.lastName}
            onChange={form.handleLastName}
          />
        </Col>
        <Col sm='12' lg='12' className='text-center mt-3'>
          <p>Shop information</p>
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='shop_name'
            label='Shop name'
            className='mb-3'
            required
            type='text'
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='division'
            label='Division'
            required
            select
            options={form.divisions}
            className='mb-3'
            value={form.division}
            onChange={form.handleDivision}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='district'
            label='District'
            required
            select
            options={form.districts}
            className='mb-3'
            value={form.district}
            onChange={form.handleDistrict}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='upazila'
            label='Upazila'
            required
            select
            options={form.upazilas}
            className='mb-3'
            value={form.upazila}
            onChange={form.handleUpazila}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='area'
            label='Area'
            type='text'
            required
            className='mb-3'
            value={form.area}
            onChange={form.handleArea}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='street'
            label='Street'
            type='text'
            required
            className='mb-3'
            value={form.street}
            onChange={form.handleStreet}
          />
        </Col>
        <Col sm='12' lg='6'>
          <FormGroup
            name='house'
            label='House'
            type='text'
            required
            className='mb-3'
            value={form.house}
            onChange={form.handleHouse}
          />
        </Col>
      </Row>
      <Button type='submit' className='w-100'>
        Next
      </Button>
      <Container fluid className='mt-3 text-center'>
        Already have an account? <Link to='/login'>Login</Link>
      </Container>
    </Form>
  );
};
