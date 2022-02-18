import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const HeroRegForm = () => {
  return (
    <Form
      action="post"
      className="bg-white p-4 rounded w-100 shadow"
      style={{ maxWidth: "420px" }}
    >
      <FloatingLabel label="Mobile">
        <Form.Control
          type="number"
          className="mb-3"
          id="mobile"
          placeholder="Mobile"
          aria-placeholder="input your mobile number"
          autoComplete="phone"
        />
      </FloatingLabel>
      <FloatingLabel label="Email">
        <Form.Control
          type="email"
          className="mb-3"
          id="email"
          placeholder="Email"
          aria-placeholder="input your email address"
          autoComplete="email"
        />
      </FloatingLabel>
      <Button variant="outline-primary" type="submit" className="w-100">
        Register
      </Button>
    </Form>
  );
};

export default HeroRegForm;
