import React from "react";
import HOC from "./hoc";

const User = (props) => {
  return (
    <>
      <h1>Users</h1>
      {props.hello &&
        props.hello.map((item, index) => {
          return (
            <div className="col-md-12 my-3" key={index}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.email}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userData: [],
//     };
//   }

//   componentDidMount() {
//     fetch()
//       .then((resp) => resp.json())
//       .then((data) => this.setState({ userData: data }));
//   }
//   render() {

//   }
// }

export default HOC(User, "https://jsonplaceholder.typicode.com/users");
