import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ParcelsTable from './parcels-table';

const Parcels = () => {
  return (
    <Container className='container-lg p-3'>
      <Row className='m-0' style={{ maxWidth: '100vw', overflowX: 'scroll' }}>
        <ParcelsTable />
      </Row>
    </Container>
  );
};

export default Parcels;
