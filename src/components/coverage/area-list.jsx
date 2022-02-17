import React from "react";
import { Container, Table } from "react-bootstrap";
import { locations } from "../../assets/locations";

const AreaList = () => {
  const areas = () => {
    const arr = locations.map((locations) => locations.areas);
    return arr;
  };
  console.log(areas());

  return (
    <Container
      fluid
      className="p-0 mt-3"
      style={{ maxHeight: "400px", overflowY: "scroll" }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>City</th>
            <th>COD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default AreaList;
