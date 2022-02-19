import React from "react";
import { Container, Breadcrumb, Form, Button } from "react-bootstrap";
import FormGroup from "../components/form-group";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

const loginFormData = [
  { id: "mobile", name: "mobile", label: "Mobile", required: true },
  { id: "password", name: "password", label: "Password", required: true },
];

const Login = () => {
  return (
    <Container
      className="container-lg p-4"
      style={{ marginTop: "90px", marginBottom: "90px" }}
    >
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mb-5 w-100" />
      <Form
        action="submit"
        className="bg-white shadow p-3 rounded mx-auto"
        style={{ maxWidth: "450px" }}
      >
        {loginFormData.map(({ id, name, label, required }) => (
          <FormGroup
            key={v4()}
            label={label}
            name={name}
            required={required}
            id={id}
            className="mb-3"
          />
        ))}
        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
      <div className="text-center mt-5">
        Don't have an account?{" "}
        <Link to="/register" className="link">
          Register
        </Link>
      </div>
    </Container>
  );
};

export default Login;
