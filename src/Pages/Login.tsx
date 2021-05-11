import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleLoggedInUser = () => {
    history.push("/home");
  }
  
  React.useEffect(()=>{
    if(localStorage.getItem("token")){
      handleLoggedInUser();
    }
  })

  return (
    <div className="d-flex justify-content-center">
      <LoginForm />
    </div>
  );
};

export default Login;
