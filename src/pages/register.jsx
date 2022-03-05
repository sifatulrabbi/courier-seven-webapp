import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useNavLinks } from '../contexts';
import { PrimaryRegForm, ProfileRegForm, OtpForm } from '../components';

const Register = () => {
  const { homeLinks } = useNavLinks();
  const [animation, setAnimation] = React.useState('');

  React.useEffect(() => {
    homeLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setAnimation('on-mount 0.6s ease-out forwards');
  }, []);

  return (
    <Container
      className='container-lg p-4'
      style={{ marginTop: '90px', marginBottom: '90px', animation: animation }}
    >
      <Routes>
        <Route path='/' element={<PrimaryRegForm />} />
        <Route path='/otp' element={<OtpForm />} />
        <Route path='/profile' element={<ProfileRegForm />} />
      </Routes>
    </Container>
  );
};

export default Register;
