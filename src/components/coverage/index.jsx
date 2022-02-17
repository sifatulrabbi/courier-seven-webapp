import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AreaList from "./area-list";

const Coverage = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col sm="12" lg="6" className="p-3">
          <h6 className="subtitle">Coverage</h6>
          <h2 className="h2 text-bolder mb-4">
            We provide a <br />
            wide <span className="text-primary">Coverage</span>
          </h2>
          <p style={{ maxWidth: "30rem" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            quaerat veniam culpa quidem.
          </p>
          <Button variant="secondary mt-5">Full list</Button>
        </Col>
        <Col className="">
          <AreaList />
        </Col>
      </Row>
    </Container>
  );
};

export default Coverage;
