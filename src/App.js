// @flow
import React, { Component } from "react";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Routers from "./routers/AppRouters";
import { Container} from "semantic-ui-react";

class App extends Component {
  // componentDidMount(){
  //   let showPosition = position => {
  //      position.coords.latitude,
  //      position.coords.longitude
        
  //   };
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(showPosition);
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }
  render() {
    return (
      <Container>
        <Routers />
      </Container>     
    );
  }
}

export default App;
