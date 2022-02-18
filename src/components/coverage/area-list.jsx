import React from "react";
import { Container, Table } from "react-bootstrap";
import { locations } from "../../assets/locations";
import { v4 } from "uuid";

const InfoTable = ({ location }) => {
  return (
    <Table striped hover bordered className="m-0">
      <thead>
        <tr>
          <th>City</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        {location.areas.map((area) => (
          <tr key={v4()}>
            <td>{area}</td>
            <td>{location.charge["1kg"]} tk</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const AreaList = () => {
  return (
    <Container fluid className="p-0 mt-3">
      <span className="h5 d-block mb-3">Inside Dhaka</span>
      <Container
        fluid
        className="p-0"
        style={{ maxHeight: "400px", overflowY: "scroll" }}
      >
        <InfoTable location={locations[0]} />
      </Container>
    </Container>
  );
};

export default AreaList;
