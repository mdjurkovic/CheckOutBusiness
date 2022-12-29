import { useRef, useState } from "react";
import { Form, redirect } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isLoading, response, error } = useFetch("authenticate");
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const validate = () => {
    if (
      usernameRef.current.value === "admin" &&
      passwordRef.current.value === "123"
    ) {
      navigate("discounts");
    }
  };

  return (
    <Form id="login" className="justify-align round">
      <div>
        <label>Username: </label>
        <br />
        <input ref={usernameRef} type="text" />
      </div>
      <br />
      <div>
        <label>Password: </label>
        <br />
        <input ref={passwordRef} type="password" />
      </div>
      <br />
      <button onClick={() => validate()}>Login</button>
    </Form>
  );
};

export default Login;
