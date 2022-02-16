import React from "react";
import { Card as BSCard, Container, Col, Row, Button } from "react-bootstrap";
import { BiCustomize } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";

function Card() {
  return (
    <Col md="6" sm="6" xl="4" className="" style={{ maxWidth: "24rem" }}>
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

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="container container-lg py-5">
      <span className="subtitle">Easy Process</span>
      <h2 className="h2 mb-4 text-bolder">
        <span className="text-primary">Three steps</span> to
        <br />
        Delivery your parcel
      </h2>
      <p style={{ maxWidth: "30rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel
        quod corrupti est quidem reiciendis quo recusandae cumque. Quaerat dolor
        fuga ut nihil at.
      </p>
      <Row className="g-5 justify-content-center mt-5">
        <Card />
        <Card />
        <Card />
      </Row>
      <Row className="my-5 pt-5"></Row>
    </section>
  );
}
