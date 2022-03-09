import React from 'react';
import { Col } from 'react-bootstrap';
import FormGroup from '../form-group';
import { v4 } from 'uuid';
import { useCreateParcel } from '../../hooks';

const ProductInfo = () => {
  const hook = useCreateParcel();

  return (
    <>
      <Col key={v4()} sm='12' lg='6' className='p-2'>
        <FormGroup
          type='number'
          id='product-price'
          name='product_price'
          label='Product Price'
          value={hook.productPrice}
          onChange={hook.handleProductPrice}
        />
      </Col>
      <Col key={v4()} sm='12' lg='6' className='p-2'>
        <FormGroup
          type='number'
          id='product-weight'
          name='product_weight'
          label='Product Weight'
          value={hook.productWeight}
          onChange={hook.handleProductWeight}
        />
      </Col>
      <Col key={v4()} sm='12' lg='6' className='p-2'>
        <FormGroup
          select
          id='product-type'
          name='product_type'
          label='Product Type'
          options={['Solid', 'Liquid', 'Fragile']}
          value={hook.productType}
          onChange={hook.handleProductType}
        />
      </Col>
    </>
  );
};

export default ProductInfo;
