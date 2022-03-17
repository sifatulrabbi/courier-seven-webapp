import React from 'react';
import { Link } from 'react-router-dom';

function BrandName() {
  return (
    <Link to='/#' className='h5 m-0 text-bolder p-0 text-primary'>
      <span className='text-secondary'>Courier</span>
      <span className='text-primary'> Seven</span>
    </Link>
  );
}

export default BrandName;
