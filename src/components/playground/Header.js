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
        <header className="App-header">
        <NavLink to="/userform">Insert New User </NavLink>
        <NavLink to="/hotels"> All Hotel</NavLink>
        <NavLink to="/"> Home </NavLink><br />
        <NavLink to="/a">Insert New Hotel </NavLink>
        <NavLink to="/houseForm"> Insert New House </NavLink>
        
        </header>
      </div>
    );
  }
}

export default Header;
