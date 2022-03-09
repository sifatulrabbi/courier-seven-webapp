import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductsDetails = () => {
  return (
    <Card
      className='mt-3 border-0 bg-white p-3 shadow-sm'
      style={{ maxWidth: '26rem' }}
    >
      <div className='mb-3'>
        <span className='d-block text-primary fs-5'>Invoice ID</span>
        <span>PRODUCT-INVOICE-ID</span>
      </div>
      <div className='mb-3'>
        <span className='d-block text-primary fs-5'>From</span>
        <span className='d-block'>Shop name</span>
        <span className='d-block'>Dhaka / Dhaka / Dhaka / Kamrangirchar</span>
        <span className='d-block'>+8801234567890</span>
      </div>
      <div className='mb-3'>
        <span className='d-block text-primary fs-5'>To</span>
        <span className='d-block'>Customer name</span>
        <span className='d-block'>Dhaka / Dhaka / Gazipur / Notun bazaar</span>
        <span className='d-block'>+8801234567890</span>
      </div>
      <div className='mb-3'>
        <span className='d-block text-primary fs-5'>Product</span>
        <div>
          <span className='d-block'>Collection: 1000 TK</span>
          <span className='d-block'>Price: 930 TK</span>
          <span className='d-block'>Weight: 130 gm</span>
          <span className='d-block'>Type: Solid</span>
        </div>
      </div>
      <div className='mb-3'>
        <span className='d-block text-primary d-block fs-5'>Delivered</span>
        <span>No</span>
      </div>
      <div>
        <span className='d-block text-primary d-block fs-5'>Cash back</span>
        <span>
          <span className='fw-bold'>Due: </span>
          920 TK
        </span>
      </div>
      <Button variant='secondary' className='mt-4'>
        Print
      </Button>
    </Card>
  );
};

export default ProductsDetails;
