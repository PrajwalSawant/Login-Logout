import React, { useContext, useEffect } from "react";
import { getLocalStorage } from "../commonFunctions/getLocalStorage";
import { useNavigate } from "react-router";
import UserContext from "../context/userContext";
import { useDispatch } from "react-redux";
import { setNotes } from "../slice/notesSlice";
import { database } from "../helper";

const Layout = ({ children }) => {
  const context = useContext(UserContext);
  const dispatch = useDispatch();
  const userData = getLocalStorage();
  const navigate = useNavigate();
  const fetchData = () => {
    database.on("value", (snapshot) => {
      const data = snapshot.val();
      dispatch(setNotes(data));
    });
  };
  useEffect(() => {
    if (!context.checkLogin) {
      if (!userData.email || !userData.password) {
        navigate("/login");
        localStorage.clear();
      } else {
        context.setCheckLogin(true);
      }
      fetchData();
    }
  }, []);

  return <>{children}</>;
};

export default Layout;
