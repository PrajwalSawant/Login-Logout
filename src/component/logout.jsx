import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
import { setUserData } from "../slice/userSlice";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setCheckLogin } = useContext(UserContext);
  const handleLogout = () => {
    setCheckLogin(false);
    dispatch(setUserData(null));
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div class="card text-left">
        {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
        <div class="card-body">
          <h4 class="card-title">Do you wish to log out from out website ?</h4>
          <p class="card-text mt-5">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => handleLogout()}>
              Logout
            </button>
          </p>
        </div>
      </div>
    </>
  );
};
export default LogOut;
