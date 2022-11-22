import React, { useState, useEffect, useContext } from "react";
import UserContext from "../context/userContext";

const Home = () => {
  const [count, setCount] = useState(0);
  let counts = 100;
  const context = useContext(UserContext);
  const [check, setCheck] = useState(false);
  return (
    <>
      <h1>This is home page</h1>
      <h1> Counter : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          // counts += 1;
        }}>
        Add
      </button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{check ? "true" : "false"}</h1>
      <button onClick={() => setCheck(!check)}>change</button>
    </>
  );
};
export default Home;
