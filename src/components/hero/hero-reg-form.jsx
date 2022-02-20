import React from "react";
import { Button, Form } from "react-bootstrap";
import FormGroup from "../form-group";
import { useNavigate } from "react-router-dom";

const HeroRegForm = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/register/otp");
  }

  return (
    <Form
      action="post"
      className="bg-white p-3 rounded w-100 shadow"
      style={{ maxWidth: "420px" }}
      onSubmit={handleSubmit}
    >
      <FormGroup
        type="number"
        className="mb-3"
        id="mobile"
        placeholder="Mobile"
        name="mobile"
        label="Mobile"
      />
      <Button variant="outline-primary" type="submit" className="w-100">
        Register
      </Button>
    </Form>
  );
};

export default HeroRegForm;
