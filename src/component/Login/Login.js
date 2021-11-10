import React from "react";
import { useLocation, useHistory } from "react-router";
import { Container } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import google from "../../images/icon/google.png";

import "./Login.css";

const Login = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="login mx-auto">
      <Container>
        <div className="">
          <button onClick={handleGoogleLogin}>
            {" "}
            <img src={google} alt="" width="50px" /> GOOGLE LOGIN
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
