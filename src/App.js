// @flow
import React, { Component } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Routers from "./routers/AppRouters";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Container>
        <Routers />
      </Container>
    );
  }
}

export default App;
