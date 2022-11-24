import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLocalStorage } from "../commonFunctions/getLocalStorage";
import UserContext from "../context/userContext";
import style from "./style.module.scss";
const Navbar = () => {
  const [check, setCheck] = useState(false);
  const context = useContext(UserContext);
  const { user } = useSelector((state) => state.userData);
  const checkLogin = () => {
    // const userData = getLocalStorage();
    // if (!userData.email || !userData.password) {
    //   setCheck(false);
    // } else {
    //   setCheck(true);
    // }
    if (!context.checkLogin) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  };
  useEffect(() => {
    checkLogin();
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/list">
                List
              </Link>
              <Link className="nav-link" to="/notepage">
                NotePage
              </Link>
              <Link className="nav-link" to="/hoc">
                HOC
              </Link>
              {check ? (
                <Link className="nav-link" to="/logout">
                  LogOut
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
              {/* <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true">
                Disabled
              </a> */}
            </div>
            <div className={style.textName}>{user && user?.userEmail}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
