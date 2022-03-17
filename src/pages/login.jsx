import React from 'react';
import {
  Container,
  Form,
  Button,
  FormControl,
  FloatingLabel,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginForm, useApi } from '../hooks';
import { useNavLinks, useConstants, useAuth } from '../contexts';

const Login = () => {
  const loginForm = useLoginForm();
  const { homeLinks } = useNavLinks();
  const [animation, setAnimation] = React.useState('');
  const { LOGIN_USER_KEY } = useConstants();
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  async function checkForLoginUser() {
    if (isAuthenticated) {
      navigate('/users');
      return;
    }
    const userId = localStorage.getItem(LOGIN_USER_KEY);
    if (!userId) return;
    const user = await useApi.getUserById(userId);
    if (!user) return;
    login(user);
    navigate('/users');
  }

  React.useEffect(() => {
    checkForLoginUser();
    homeLinks();
    setAnimation('on-mount 0.4s ease-out forwards');
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Button type='submit' className='w-100'>
          Login
        </Button>
      </Form>
      <div className='w-100 text-center mt-4'>
        Don't have an account? <Link to='/register'>Register now</Link>
      </div>
    </Container>
  );
};

export default Login;
