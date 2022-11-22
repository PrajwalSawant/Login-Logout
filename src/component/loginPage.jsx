import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
import { googleProvider } from "../helper";
import firebase from "firebase/app";
import "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const { setCheckLogin } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the details");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setCheckLogin(true);
    navigate("/");
  };

  const handleGoogleLogin = () => {
    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
      <hr />

      <button
        type="button"
        onClick={() => handleGoogleLogin()}
        className="btn btn-outline-danger">
        Google Auth
      </button>
    </>
  );
};
export default Login;
