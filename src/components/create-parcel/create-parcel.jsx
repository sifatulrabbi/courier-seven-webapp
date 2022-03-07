import React from 'react';
import { Container } from 'react-bootstrap';
import Aside from './aside';
import CreateParcelForm from './create-parcel-form';

const CreateParcel = () => {
  return (
    <Container
      className='container-lg p-3 d-flex flex-column-reverse flex-lg-row'
      style={{ gridGap: '2rem' }}
    >
      <CreateParcelForm />
      <Aside />
    </Container>
  );
};

export default CreateParcel;
