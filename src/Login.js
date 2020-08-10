import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    //Login Logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();
    //register Logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="Login">
      <Link to="/">
        <img
          src="https://pluspng.com/img-png/amazon-logo-vector-png-amazon-logo-vector-512.png"
          alt="Logo"
          className="Login_Logo"
        />
      </Link>
      <div className="LoginContainer">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(event) => setemail(event.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />
          <button type="submit" onClick={login} className="login_sign">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login_reg">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
