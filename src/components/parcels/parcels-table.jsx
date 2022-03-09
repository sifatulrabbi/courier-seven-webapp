import React from 'react';
import { Table } from 'react-bootstrap';
import { parcelsData } from '../../assets';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

const ParcelsTable = () => {
  return (
    <Table striped size='lg' style={{ minWidth: 800 }}>
      <thead>
        <tr>
          {parcelsData.fields.map((field) => (
            <th key={v4()}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {parcelsData.values.map((value, index) => (
          <tr key={v4()}>
            <td>{index}</td>
            <td>
              <Link to={`/users/tracking?id=${value.parcelId}`}>
                {value.parcelId}
              </Link>
            </td>
            <td>{value.customerName}</td>
            <td>{value.customerMobile}</td>
            <td>{value.collectionAmount}</td>
            <td>{value.delivered ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ParcelsTable;
