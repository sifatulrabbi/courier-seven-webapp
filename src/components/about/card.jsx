import React from "react";

import { Card as BSCard, Col, Button } from "react-bootstrap";

function Card() {
  return (
    <Col md="6" sm="6" xl="4" className="p-4" style={{ maxWidth: "24rem" }}>
      <BSCard className="bg-gray border-0 shadow">
        <BSCard.Header className="bg-gray border-0">
          <span className="subtitle">Step one</span>
        </BSCard.Header>
        <BSCard.Body>
          <BSCard.Title>Register as a user</BSCard.Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit accusantium
            adipisicing elit
          </p>
        </BSCard.Body>
        <BSCard.Footer className="bg-gray border-0">
          <Button variant="outline-primary">Learn More</Button>
        </BSCard.Footer>
      </BSCard>
    </Col>
  );
}

export default Card;
