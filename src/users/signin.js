import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
<div className="signin-screen" >
  <h1>Sign In</h1>
  
  <div className="signin-input">
    <label htmlFor="username">Username:</label>
    <input
      id="username"
      value={credentials.username}
      onChange={(e) => setCredentials({...credentials, username: e.target.value})}
    />
  </div>
  
  <div className="signin-input">
    <label htmlFor="password">Password:</label>
    <input
      id="password"
      type="password"
      value={credentials.password}
      onChange={(e) => setCredentials({...credentials, password: e.target.value})}
    />
  </div>
  
  <button className="btn btn-primary" onClick={signin}>Sign In</button>
</div>

  );
}
export default Signin;