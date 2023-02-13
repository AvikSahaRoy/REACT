import React from "react";
import Newcom from "./Newcom";

class State extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "red"
  };
  render() {
    return (
      <div>
        <h1 style={this.styles}>Welcome</h1>
        <Newcom />
      </div>
    );
  }
}

export default State;
