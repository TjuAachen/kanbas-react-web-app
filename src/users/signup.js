import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="signin-screen" >
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <div className="signin-input">
      <label htmlFor="username">Username:</label>
        <input
          value={credentials.username}
          onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })} />
      </div>
      <div className="signin-input">
      <label htmlFor="username">Password:</label>
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })} />
      </div>
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;