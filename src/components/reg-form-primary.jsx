import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import FormGroup from "./form-group";
import { useNavigate, Link } from "react-router-dom";

const PrimaryRegForm = ({ callBack }) => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (callBack) callBack();
    navigate("/register/otp");
  }

  return (
    <Form
      action="submit"
      className="bg-white rounded p-3 shadow mx-auto"
      style={{ maxWidth: "450px" }}
      onSubmit={handleSubmit}
    >
      <FormGroup
        id="mobile"
        name="mobile"
        label="Mobile"
        type="number"
        required
        className="mb-3"
      />
      <Container fluid className="p-0 d-flex justify-content-between">
        <Link to="/login">
          <Button variant="outline-primary">Login</Button>
        </Link>
        <Button type="submit">Next</Button>
      </Container>
    </Form>
  );
};

export default PrimaryRegForm;
