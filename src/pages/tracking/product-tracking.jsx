import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { v4 } from 'uuid';

const trackingData = [
  {
    title: 'Picking up',
    date: '2/9/2022',
    time: '12:10:20 PM',
    delivered: true,
  },
  {
    title: 'Reaching hub',
    date: '3/9/2022',
    time: '1:50:39 PM',
    delivered: true,
  },
  {
    title: 'Delivering to customer',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    delivered: false,
  },
  {
    title: 'Cash back',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    delivered: false,
  },
];

const ProductTracking = () => {
  return (
    <Container fluid className='p-0 w-100 mt-3'>
      {trackingData.map((data) => (
        <Card
          key={v4()}
          className='border-0 mb-3 shadow-sm'
          style={{ width: 'clamp(250px, 100%, 400px)' }}
        >
          <Card.Body>
            <div className='d-flex justify-content-between'>
              <h5>{data.title}</h5>
              <span className='d-block mx-3 fw-bold text-primary'>
                {data.delivered ? 'Done' : 'Inprogress'}
              </span>
            </div>
            <small className='text-secondary'>
              {data.date} @ {data.time}
            </small>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ProductTracking;
