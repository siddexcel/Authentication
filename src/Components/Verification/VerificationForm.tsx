import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./VerificationForm.css";

const VerificationForm = () => {
  const [code, setCode] = React.useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <div className="verification_form bg-white rounded shadow p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="m-3">
          <Form.Label>Enter the 6 digit code</Form.Label>
          <Form.Control
            type="password"
            placeholder="6 Digit Code"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please wait if the code has not arrived yet.
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="btn-warning rounded-pill">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default VerificationForm;
