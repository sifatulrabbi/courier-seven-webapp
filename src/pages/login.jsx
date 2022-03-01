import React from 'react';
import {
  Container,
  Breadcrumb,
  Form,
  Button,
  FormControl,
  FloatingLabel,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoginForm } from '../hooks';

const Login = () => {
  const loginForm = useLoginForm();

  return (
    <Container
      className='container-lg p-4'
      style={{ marginTop: '90px', marginBottom: '90px' }}
    >
      <Breadcrumb>
        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className='mb-5 w-100' />
      <Form
        action='submit'
        className='bg-white shadow p-3 rounded mx-auto'
        style={{ maxWidth: '450px' }}
        onSubmit={loginForm.handleSubmit}
      >
        <FloatingLabel label='Mobile'>
          <FormControl
            type='number'
            id='mobile'
            name='mobile'
            placeholder='Mobile'
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
            <Button variant='outline-primary'>Register</Button>
          </Link>
          <Button type='submit'>Login</Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
