import React from "react";
import Pages from "./HOC/pages";
import User from "./HOC/users";

class HighOrderCom extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <Pages />
          </div>
          <div className="col-md-6">
            <User />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HighOrderCom;
