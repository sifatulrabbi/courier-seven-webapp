import React from "react";
import { Container, Table, Accordion } from "react-bootstrap";
import { locations } from "../../assets/locations";
import { v4 } from "uuid";

const InfoTable = ({ location }) => {
  return (
    <Table striped bordered hover className="m-0" style={{ minWidth: 695 }}>
      <thead>
        <tr>
          <th>City</th>
          <th>1KG</th>
          <th>2KG</th>
          <th>3KG</th>
          <th>COD</th>
          <th>
            Home
            <br />
            Delivery
          </th>
          <th>Lockdown</th>
        </tr>
      </thead>
      <tbody>
        {location.areas.map((area) => (
          <tr key={v4()}>
            <td>{area}</td>
            <td>{location.charge["1kg"]} tk</td>
            <td>{location.charge["2kg"]} tk</td>
            <td>{location.charge["3kg"]} tk</td>
            <td>{location.COD_charge}%</td>
            <td>{location.home_delivery ? "Yes" : "False"}</td>
            <td>{location.lockdown ? "Yes" : "False"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const LocationsTable = () => {
  return (
    <Container fluid className="p-0 mt-3">
      <Accordion>
        {locations.map((location, index) => (
          <Accordion.Item key={v4()} eventKey={index}>
            <Accordion.Header>{location.district}</Accordion.Header>
            <Accordion.Body
              className="p-0"
              style={{ maxHeight: "400px", overflowY: "scroll" }}
            >
              <InfoTable location={location} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default LocationsTable;
