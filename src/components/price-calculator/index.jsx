import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CalculatorForm from "./calculator-form";

const PriceCalculator = () => {
  return (
    <Container fluid className="py-5">
      <Container className="container-lg">
        <Row>
          <Col sm="12" lg="6" className="mb-5">
            <span className="subtitle">Calculate Charge</span>
            <h2 className="h2 mb-4 text-bolder">
              <span className="text-primary">Plan ahead</span> with
              <br />
              the calculator
            </h2>
          </Col>
          <Col>
            <CalculatorForm />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PriceCalculator;
