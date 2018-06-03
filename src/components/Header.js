// @flow
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavLink to="/userform">Insert New User</NavLink>
        <NavLink to="/userDetails">User</NavLink>
        <NavLink to="/"> Home </NavLink>
      </div>
    );
  }
}

export default Header;
