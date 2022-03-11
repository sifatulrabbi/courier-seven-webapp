import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import FormGroup from '../form-group';
import { Link } from 'react-router-dom';
import { useOTPForm } from '../../hooks/use-otp-form';

export const OtpForm = ({ callBack }) => {
  const { otp, handleOTPChange, handleSubmitOtp } = useOTPForm();

  return (
    <Form
      action='submit'
      className='bg-white rounded p-3 shadow-sm mx-auto'
      style={{ maxWidth: '450px' }}
      onSubmit={handleSubmitOtp}
    >
      <FormGroup
        name='otp'
        id='otp'
        required
        label='OTP'
        type='number'
        className='mb-3'
        value={otp}
        onChange={handleOTPChange}
      />
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Link to='/register'>
          <Button variant='secondary'>Previous</Button>
        </Link>
        <Button type='submit'>Verify</Button>
      </Container>
    </Form>
  );
};
