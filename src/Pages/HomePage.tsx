import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const token = React.useRef(localStorage.getItem("token"));

  React.useEffect(() => {
    if (!token.current) {
      handleLogout();
    }
  });

  const handleLogout = () => {
    history.push("/");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-dark p-3 m-2 bg-dark rounded-pill shadow"
          onClick={handleLogout}
        >
          <i className="bi bi-arrow-left"></i>
          {" Logout "}
        </button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <h1 className="p-2 rounded shadow bg-success text-light">Dashboard</h1>
      </div>
    </div>
  );
};

export default HomePage;
