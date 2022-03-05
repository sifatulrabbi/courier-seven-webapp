import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import FormGroup from '../form-group';
import { useNavigate, Link } from 'react-router-dom';

export const OtpForm = ({ callBack }) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (callBack) callBack();
    navigate('/register/profile');
  }

  return (
    <Form
      action='submit'
      className='bg-white rounded p-3 shadow mx-auto'
      style={{ maxWidth: '450px' }}
      onSubmit={handleSubmit}
    >
      <FormGroup
        name='otp'
        id='otp'
        required
        label='OTP'
        type='number'
        className='mb-3'
      />
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Link to='/register/primary'>
          <Button variant='secondary'>Previous</Button>
        </Link>
        <Button type='submit'>Verify</Button>
      </Container>
    </Form>
  );
};
