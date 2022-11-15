import React, { useState } from "react";
import Navbar from "./component/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home";
import List from "./component/list";
import Login from "./component/loginPage";
import LogOut from "./component/logout";
import Layout from "./component/layout";
import UserContext from "./context/userContext";
const App = () => {
  const [checkLogin, setCheckLogin] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ checkLogin, setCheckLogin }}>
        <Navbar />
        <div className="container pt-5">
          <Layout>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<List />} path="/list" />
              <Route element={<Login />} path="/login" />
              <Route element={<LogOut />} path="/logout" />
            </Routes>
          </Layout>
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
