import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import Card from "./card";
import FeatureCard from "./feature-card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container id="features" className="container-lg py-5 px-4">
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
      <Row className="justify-content-center mt-5">
        <Card />
        <Card />
        <Card />
      </Row>
      <Row className="my-5 pt-5 justify-content-center">
        <h2 className="h2 text-center text-bolder mb-5">
          Our <span className="text-primary">Promises</span>
          <br />
          are realistic
        </h2>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </Row>
      <Row className="justify-content-center py-5 m-0 px-0">
        <h3 className="h3 text-center">
          Join us
          <Link to="/register">
            <Button variant="primary mx-3">Register</Button>
          </Link>
        </h3>
      </Row>
    </Container>
  );
};

export default About;
