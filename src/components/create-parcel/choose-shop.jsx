import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { v4 } from 'uuid';

const data = [
  {
    name: 'My shop one',
    mobile: '+8801234567890',
    email: 'email.shop@email.com',
    address: {
      division: 'Dhaka',
      district: 'Dhaka',
      upazila: 'Dhaka',
      area: 'Kamrangirchar',
      street: 'Chad Mosjid Road',
      house: 'No: 586',
    },
  },
  {
    name: 'Shop two',
    mobile: '+8801234567891',
    email: 'email.shoptwo@email.com',
    address: {
      division: 'Dhaka',
      district: 'Dhaka',
      upazila: 'Dhaka',
      area: 'Kamrangirchar',
      street: 'Chad Mosjid Road',
      house: 'No: 586',
    },
  },
];

const ChooseShop = () => {
  const [shop, setShop] = React.useState(data[0]);

  function handleChange(e) {
    const shop = data.find((shop) => shop.name === e.currentTarget.value);
    setShop(shop ? shop : data[0]);
  }

  return (
    <Card
      className='border-0 w-100 shadow-sm'
      style={{ minWidth: 290, height: 'max-content' }}
    >
      <Card.Body>
        <Card.Title>{shop.name}</Card.Title>
        <div>
          <span className='fw-bold'>Mobile: </span>
          <span>{shop.mobile}</span>
        </div>
        <div className='mt-1'>
          <span className='fw-bold'>Email: </span>
          <span>{shop.email}</span>
        </div>
        <div className='mt-1'>
          <span className='fw-bold'>Address: </span>
          <div className='px-4'>
            <div>
              <span className='fw-bold'>Division: </span>
              <span>{shop.address.division}</span>
            </div>
            <div>
              <span className='fw-bold'>District: </span>
              <span>{shop.address.district}</span>
            </div>
            <div>
              <span className='fw-bold'>Upazila: </span>
              <span>{shop.address.upazila}</span>
            </div>
            <div>
              <span className='fw-bold'>Area: </span>
              <span>{shop.address.area}</span>
            </div>
            <div>
              <span className='fw-bold'>Street: </span>
              <span>{shop.address.street}</span>
            </div>
            <div>
              <span className='fw-bold'>House: </span>
              <span>{shop.address.house}</span>
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        <Form.Select value={shop.name} onChange={handleChange}>
          {data.map((shop) => (
            <option key={v4()} value={shop.name}>
              {shop.name}
            </option>
          ))}
        </Form.Select>
      </Card.Footer>
    </Card>
  );
};

export default ChooseShop;
