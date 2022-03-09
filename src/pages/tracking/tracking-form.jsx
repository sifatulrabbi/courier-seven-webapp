import React from 'react';
import { Form, Button } from 'react-bootstrap';

const TrackingForm = () => {
  return (
    <Form
      action='/users/tracking'
      method='get'
      className='d-flex'
      style={{ maxWidth: '26rem' }}
    >
      <Form.Control
        name='invoice_id'
        id='invoice_id'
        placeholder='PRODUCT-INVOICE-ID'
        style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
      />
      <Button
        type='submit'
        style={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        Search
      </Button>
    </Form>
  );
};

export default TrackingForm;
