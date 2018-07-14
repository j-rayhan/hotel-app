// @flow
import React, { Component } from "react";
import { Input, Dropdown } from "semantic-ui-react";

import { countryOptions } from "./Country";

let placeData = require("./SearchData.json");

class SearchBox extends Component {
  state = {
    places: [],
    searchValue: ""
  };

  handleSearchChange = e => {
    const value = e.target.value.toUpperCase();

    this.setState({
      searchValue: value
    });

    if (value === "") {
      this.setState({
        places: []
      });
    } else {
      console.log(value);
      this.setState({
        places: placeData.countries
          .map(function(obj, index) {
            // console.log(obj.country.country_name.match(`/andorra/g`));
            return obj.country.country_name;
          })
          .filter(word => {
            if (!word.search(value)) {
              return word;
            }
          }),
        // places: placeData.countries.filter(word => word.length >12),
        showRemoveIcon: true
      });
    }
  };
  render() {
    const { places } = this.state;
    // const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };
    // console.log(placeData.countries);
    // console.log(places);
    const placesRows = places.map((country, idx) => (
      <div key={idx}>
        <p> {country} </p>
      </div>
    ));
    return (
      <div id="search">
        <div className="ui fluid search">
          <Input
            fluid
            action={{
              color: "teal",
              labelPosition: "left",
              icon: "search",
              content: "Search"
            }}
            actionPosition="right"
            placeholder="Search..."
            value={this.state.searchValue}
            onChange={this.handleSearchChange}
          />
        </div>
        {placesRows.length > 0 ? placesRows : null}
      </div>
    );
  }
}

class SearchBox_1 extends Component {
  state = {
    searchValue: ""
  };
  handleSearchValue = (e, data) => {
    // console.log("====================================");
    // console.log("search value ", e.target);
    // console.log("====================================");
    // const value = e.target.value.toUpperCase();

    this.setState({
      searchValue: "value"
    });
  };
  render() {
    return (
      <div style={{ marginBottom: "14px" }}>
        <Dropdown
          fluid
          search
          selection
          placeholder="Select Country"
          onChange={this.handleSearchValue}
          options={countryOptions}
        />
      </div>
    );
  }
}

const SearchBox_2 = () => (
  <div style={{ marginBottom: "14px" }}>
    <Dropdown
      fluid
      search
      selection
      placeholder="Select Country"
      options={countryOptions}
    />
  </div>
);

export default SearchBox_1;
