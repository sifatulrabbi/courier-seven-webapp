import React from 'react';
import { Col } from 'react-bootstrap';
import FormGroup from '../form-group';
import { v4 } from 'uuid';
import { createParcelData } from '../../assets';

const CustomerInfo = () => {
  return (
    <>
      <span className='h6 d-block mt-5 mb-3 text-center'>
        Customer information
      </span>
      {createParcelData.fieldsCustomer.map(
        ({ name, type, id, label, required, select, options }) => (
          <Col key={v4()} sm='12' lg='6' className='p-2'>
            <FormGroup
              id={id}
              name={name}
              type={type}
              label={label}
              required={required}
              select={select}
              options={options}
            />
          </Col>
        )
      )}
    </>
  );
};

export default CustomerInfo;
