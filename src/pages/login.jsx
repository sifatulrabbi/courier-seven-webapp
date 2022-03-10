import React from 'react';
import {
  Container,
  Form,
  Button,
  FormControl,
  FloatingLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks';
import { useNavLinks } from '../contexts';

const Login = () => {
  const loginForm = useLoginForm();
  const { homeLinks } = useNavLinks();
  const [animation, setAnimation] = React.useState('');

  React.useEffect(() => {
    homeLinks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setAnimation('on-mount 0.4s ease-out forwards');
  }, []);

  return (
    <Container
      className='container-lg p-4'
      style={{ marginTop: '90px', marginBottom: '90px', animation: animation }}
    >
      <div className='mb-5 w-100' />
      <Form
        action='submit'
        className='bg-white shadow-sm p-3 rounded mx-auto'
        style={{ maxWidth: '450px' }}
        onSubmit={loginForm.handleSubmit}
      >
        <FloatingLabel label='Email'>
          <FormControl
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
            className='mb-3'
            value={loginForm.email}
            onChange={loginForm.handleEmailChange}
          />
        </FloatingLabel>
        <FloatingLabel label='Password'>
          <FormControl
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            required
            className='mb-3'
            value={loginForm.password}
            onChange={loginForm.handlePasswordChange}
          />
        </FloatingLabel>
        <Container fluid className='p-0 d-flex justify-content-between'>
          <Link to='/register'>
            <Button variant='secondary'>Register</Button>
          </Link>
          <Button type='submit'>Login</Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
