import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ParcelView = () => {
  const params = useParams();

  return (
    <Container className="container-lg p-3">
      <h1>You are viewing {params.id}</h1>
    </Container>
  );
};

export default ParcelView;
