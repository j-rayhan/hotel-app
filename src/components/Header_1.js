// @flow
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import SearchOption from "./SearchOption";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header className="App-header">
          <SearchBox />
        </header>
      </div>
    );
  }
}

export default Header;
