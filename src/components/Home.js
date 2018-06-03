// @flow
import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class Home extends Component {
  state = {};
  render() {
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <h1>Hello Home</h1>
      </div>
    );
  }
}

export default Home;
