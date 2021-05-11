import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./VerificationForm.css";

const VerificationForm = () => {
  const [code, setCode] = React.useState("");
  const history = useHistory();
  const response = React.useRef({});

  const handleSubmit = () => {
    let token = localStorage.getItem("token");
    let payload = {
      otp: code,
      token: token,
    };
    axios
      .post(
        "https://aqueous-thicket-08050.herokuapp.com/api/verifyUser",
        payload
      )
      .then((value) => {
        response.current = value;
        if (value.data.success) {
          history.push("/home");
        } else {
          alert("Incorrect otp, Please try again.");
          history.push("/");
        }
        console.log(value);
      });
    console.log(response);
  };

  return (
    <div className="verification_form bg-white rounded shadow p-4">
      <Form
        onSubmit={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
      >
        <Form.Group controlId="formBasicEmail" className="m-3">
          <Form.Label>Enter the 6 digit code</Form.Label>
          <Form.Control
            type="text"
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
