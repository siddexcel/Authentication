import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/verify");
  };

  return (
    <div className="login_form bg-white rounded shadow p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="m-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="m-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="btn-warning rounded-pill">
            Send OTP
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
