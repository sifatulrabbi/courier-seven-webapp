import React from 'react';
import { Card } from 'react-bootstrap';

const FromTo = ({ from, to }) => {
  return (
    <div className='mb-2'>
      <div className='mb-2'>
        <div>
          <span className='fw-bold'>From: </span>
          My shop one
        </div>
        <div>
          <span className='fw-bold'>Mobile: </span>+8801234567890
        </div>
      </div>
      <div>
        <div>
          <span className='fw-bold'>To: </span>
          Customer name
        </div>
        <div>
          <span className='fw-bold'>Mobile: </span>+8801234567890
        </div>
      </div>
    </div>
  );
};

const Payments = ({
  invoice,
  collectionAmount,
  deliveryCharge,
  cod,
  cashbackAmount,
}) => {
  return (
    <div className='mb-2'>
      <div>
        <span className='fw-bold'>Invoice: </span>
        <span>MY-SHOP-PRODUCT-001</span>
      </div>
      <div>
        <span className='fw-bold'>Collection amount: </span>
        <span>1010 TK</span>
      </div>
      <div>
        <span className='fw-bold'>Delivery charge: </span>
        <span>70 TK</span>
      </div>
      <div>
        <span className='fw-bold'>COD: </span>
        <span>9 TK</span>
      </div>
      <div>
        <span className='fw-bold'>Cashback amount: </span>
        <span>931 TK</span>
      </div>
    </div>
  );
};

const ProductDetails = ({ productPrice, productWeight, productType }) => {
  return (
    <div className='mb-2'>
      <div>
        <span className='fw-bold'>Product price: </span>
        <span>930 TK</span>
      </div>
      <div>
        <span className='fw-bold'>Product weight: </span>
        <span>120 gm</span>
      </div>
      <div>
        <span className='fw-bold'>Product type: </span>
        <span>Fragile</span>
      </div>
    </div>
  );
};

const DestinationAndDate = ({ pickupAddress, deliveryAddress, orderDate }) => {
  return (
    <>
      <div className='mb-2'>
        <span className='fw-bold'>Destinations: </span>
        <div style={{ paddingLeft: '1rem' }}>
          <div>
            <span className='fw-bold'>Pickup: </span>
            <br />
            <span>Dhaka / Dhaka / Dhaka / Kamrangirchar</span>
          </div>
          <div>
            <span className='fw-bold'>Delivery: </span>
            <br />
            <span>Dhaka / Dhaka / Dhaka / Dhanmondi</span>
          </div>
        </div>
      </div>
      <div>
        <span className='fw-bold'>Order date: </span>
        07 March, 2022
      </div>
    </>
  );
};

const OrderDetails = () => {
  return (
    <Card className='shadow-sm border-0'>
      <Card.Body>
        <Card.Title>Your request</Card.Title>
        <div>
          <FromTo />
          <Payments />
          <ProductDetails />
          <DestinationAndDate />
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderDetails;
