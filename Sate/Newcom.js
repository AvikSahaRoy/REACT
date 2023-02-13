import React from "react";

class Newcom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is our React page.",
      sub: "Subscribe"
    };
  }
  ButtonChange = () => {
    this.setState({
      message: "Welcome to React",
      sub: "Subscribe"
    });
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default Newcom;
