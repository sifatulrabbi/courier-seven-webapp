import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';
import OtpForm from '../components/otp-form';
import PrimaryRegForm from '../components/reg-form-primary';
import ProfileRegForm from '../components/reg-form-profile';

const Register = () => {
  const location = useLocation();

  function getCurrentLocation() {
    const locationArr = location.pathname.split('/');
    return locationArr[locationArr.length - 1];
  }

  return (
    <Container
      className='container-lg p-4'
      style={{ marginTop: '90px', marginBottom: '90px' }}
    >
      <Breadcrumb className='mb-5'>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='/register'>Register</Breadcrumb.Item>
        <Breadcrumb.Item active>{getCurrentLocation()}</Breadcrumb.Item>
      </Breadcrumb>
      <Routes>
        <Route path='/' element={<PrimaryRegForm />} />
        <Route path='/otp' element={<OtpForm />} />
        <Route path='/profile' element={<ProfileRegForm />} />
      </Routes>
    </Container>
  );
};

export default Register;
