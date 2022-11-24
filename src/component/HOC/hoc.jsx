import React from "react";

const HOC = (WrapperComponent, fetchAPI) => {
  console.log(WrapperComponent, fetchAPI);
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }
    componentDidMount() {
      fetch(fetchAPI)
        .then((resp) => resp.json())
        .then((newData) => this.setState({ data: newData }))
        .catch((err) => console.log("ERROR OVER HERE", err));
    }

    render() {
      if (this.state.data.length < 1) return <h1>Loading ...</h1>;
      return <WrapperComponent hello={this.state.data} />;
    }
  }
  return HOC;
};

export default HOC;
