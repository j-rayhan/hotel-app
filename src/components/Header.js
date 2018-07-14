// @flow
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
import SearchOption from "./SearchOption";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/userform">Insert New User </NavLink>
        <NavLink to="/users"> All User</NavLink>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/hotels"> All Hotel </NavLink>
        <header className="App-header">
          <h1 className="App-title">Welcome to React Hotel</h1>
          <SearchBox />
          <SearchOption />
        </header>
      </div>
    );
  }
}

export default Header;
