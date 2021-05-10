import React from "react";
import VerificationForm from "../Components/Verification/VerificationForm";
import { useHistory } from "react-router-dom";

const Verification = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };
  return (
    <div>
      <button
        className="btn btn-dark p-3 m-2 bg-dark rounded-circle shadow"
        onClick={handleBack}
      >
        <i className="bi bi-arrow-left"></i>{" "}
      </button>
      <div className="d-flex justify-content-center">
        <VerificationForm />
      </div>
    </div>
  );
};

export default Verification;
