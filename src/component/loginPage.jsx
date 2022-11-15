import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";

const Login = () => {
  //   const [userData, setUserData] = useState({
  //     email: "",
  //     password: "",
  //   });
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
    </>
  );
};
export default Login;
