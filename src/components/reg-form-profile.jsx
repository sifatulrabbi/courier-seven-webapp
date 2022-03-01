import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormGroup from './form-group';
import { v4 } from 'uuid';

const profileRegFields = [
  {
    type: 'text',
    id: 'first-name',
    name: 'first_name',
    label: 'First name',
    required: true,
  },
  {
    type: 'text',
    id: 'last-name',
    name: 'last_name',
    label: 'Last name',
    required: true,
  },
  { type: 'email', id: 'email', name: 'email', label: 'Email', required: true },
  {
    type: 'password',
    id: 'password',
    name: 'password',
    label: 'Password',
    required: true,
  },
  {
    type: 'password',
    id: 'confirm-password',
    name: 'confirm_password',
    label: 'Confirm Password',
    required: true,
  },
];

const ProfileRegForm = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      action='submit'
      onSubmit={handleSubmit}
      className='bg-white rounded p-3 shadow mx-auto'
      style={{ maxWidth: '450px' }}
    >
      {profileRegFields.map(({ id, label, type, required, name }) => (
        <FormGroup
          key={v4()}
          id={id}
          label={label}
          type={type}
          required={required}
          name={name}
          className='mb-3'
        />
      ))}
      <Container fluid className='p-0 d-flex justify-content-between'>
        <Link to='/'>
          <Button variant='outline-primary'>Cancel</Button>
        </Link>
        <Button>Register</Button>
      </Container>
    </Form>
  );
};

export default ProfileRegForm;
