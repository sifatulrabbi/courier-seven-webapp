import React from 'react';

const mockInfo = {
  id: 'some_parcel_id',
  status: [
    {
      time: '10:00 pm',
      date: '03/02/22',
      statusMsg: 'Picking up',
      payment: false,
      complete: false,
    },
    {
      time: '10:30 pm',
      date: '03/02/22',
      statusMsg: 'Delivering to Hub',
      payment: false,
      complete: false,
    },
    {
      time: '11:00 pm',
      date: '03/02/22',
      statusMsg: 'Reached to Hub',
      payment: false,
      complete: false,
    },
    {
      time: '01:00 pm',
      date: '03/02/22',
      statusMsg: 'Queued for delivery',
      payment: false,
      complete: false,
    },
    {
      time: '04:00 pm',
      date: '03/02/22',
      statusMsg: 'Delivering',
      payment: false,
      complete: false,
    },
    {
      time: '10:00 am',
      date: '04/02/22',
      statusMsg: 'Delivered',
      payment: false,
      complete: false,
    },
    {
      time: null,
      date: null,
      statusMsg: 'Due till 05/02/22',
      payment: true,
      complete: false,
    },
    {
      time: null,
      date: null,
      statusMsg: 'Done',
      payment: true,
      complete: true,
    },
  ],
};

export function useTrackParcel() {
  const [showTracking, setShowTracking] = React.useState(false);
  const [info, setInfo] = React.useState({
    id: '',
    status: [
      {
        time: null,
        date: null,
        statusMsg: 'No thing listed',
        payment: false,
        complete: false,
      },
    ],
  });
  const [productId, setProductId] = React.useState('');

  function startTracking(e) {
    e.preventDefault();
    setShowTracking(false);
    setInfo(mockInfo);
    setShowTracking(true);
    setProductId('');
  }

  function handleProductId(e) {
    setProductId(e.currentTarget.value);
  }

  return {
    showTracking,
    info,
    productId,
    startTracking,
    handleProductId,
  };
}
