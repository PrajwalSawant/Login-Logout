import React, { useState } from "react";
import { database } from "../helper";
import GetNotes from "./getNotes";
const NotePage = () => {
  const [data, setData] = useState({
    notes: "",
    description: "",
  });
  const handleSumit = (e) => {
    e.preventDefault();
    if (!data.notes || !data.description) {
      alert("Please fill all the details");
      return;
    }
    database.push(data);
    setData({
      notes: "",
      description: "",
    });
    // alert("Data Inserted Successfully !!");
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSumit}>
        <div className="form-group">
          <input
            type="text"
            value={data?.notes}
            className="form-control"
            placeholder="Enter Notes"
            onChange={(e) =>
              setData((prevState) => ({ ...prevState, notes: e.target.value }))
            }
          />
        </div>
        <br />
        <div className="form-group">
          <textarea
            value={data.description}
            type="text"
            className="form-control"
            placeholder="Enter Description"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>
        <br />
        <button type="submit" className="btn btn-outline-primary">
          Sumbit
        </button>
      </form>
      <br />
      <GetNotes />
    </React.Fragment>
  );
};

export default NotePage;
