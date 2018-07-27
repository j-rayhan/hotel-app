// @flow
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import {
  Dropdown,
  Segment,
  Grid,
  Container,
  Input,
  Button
} from "semantic-ui-react";

import { countryOptions } from "./Country";

// let placeData = require("./SearchData.json");

// class SearchBox extends Component {
//   state = {
//     places: [],
//     searchValue: ""
//   };

//   handleSearchChange = e => {
//     const value = e.target.value.toUpperCase();

//     this.setState({
//       searchValue: value
//     });

//     if (value === "") {
//       this.setState({
//         places: []
//       });
//     } else {
//       // console.log(value);
//       this.setState({
//         places: placeData.countries
//           .map(function(obj, index) {
//             // console.log(obj.country.country_name.match(`/andorra/g`));
//             return obj.country.country_name;
//           })
//           .filter(word => {
//             if (!word.search(value)) {
//               return word;
//             }
//             return "";
//           }),
//         // places: placeData.countries.filter(word => word.length >12),
//         showRemoveIcon: true
//       });
//     }
//   };
//   render() {
//     const { places } = this.state;
//     // const removeIconStyle = showRemoveIcon ? {} : { visibility: "hidden" };
//     // console.log(placeData.countries);
//     // console.log(places);
//     const placesRows = places.map((country, idx) => (
//       <div key={idx}>
//         <p> {country} </p>
//       </div>
//     ));
//     return (
//       <div id="search">
//         <div className="ui fluid search">
//           <Input
//             fluid
//             action={{
//               color: "teal",
//               labelPosition: "left",
//               icon: "search",
//               content: "Search"
//             }}
//             actionPosition="right"
//             placeholder="Search..."
//             value={this.state.searchValue}
//             onChange={this.handleSearchChange}
//           />
//         </div>
//         {placesRows.length > 0 ? placesRows : null}
//       </div>
//     );
//   }
// }

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

// const SearchBox_2 = () => (
//   <div style={{ marginBottom: "14px" }}>
//     <Dropdown
//       fluid
//       search
//       selection
//       placeholder="Select Country"
//       options={countryOptions}
//     />
//   </div>
// );

class SearchBox_3 extends Component {
  state = {
    startDate: undefined,
    endDate: undefined,
    destination: "",
    adults: "",
    children: ""
  };
  componentDidMount() {
    // console.log("featch data");
    // get the value form web-browser
    try {
      const json = localStorage.getItem("searchOptions");
      const options = JSON.parse(json); // json to js {}
      if (options) {
        // var mydate = new Date(options.arrival_date);
        // console.log(mydate.toDateString());
        // console.log("...local storage...", options);

        this.setState({
          startDate: moment(options.arrival_date),
          endDate: moment(options.departure_date),
          destination: options.destination,
          adults: options.adults,
          children: options.children
        });
      }
    } catch (error) {
      // Do nothing at all
    }
    // this.setState({
    //   destination: "aaa",
    //   adults: "4",
    //   children: "2",
    //   endDate: "08/01/2018"
    // });
  }
  handleChangeStart = date => this.setState({ startDate: date });
  handleChangeEnd = date => this.setState({ endDate: date });
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  addOption = e => {
    e.preventDefault();
    const destination = e.target.elements.destination.value.trim();
    const arrival_date = e.target.elements.arrival_date.value.trim();
    const departure_date = e.target.elements.departure_date.value.trim();
    const adults = e.target.elements.adults.value.trim();
    const children = e.target.elements.children.value.trim();
    const searchValue = {
      destination: destination,
      arrival_date: arrival_date,
      departure_date: departure_date,
      adults: adults,
      children: children
    };
    if (!destination) {
      alert("please insert your DESTINATION OR PLACE");
    } else {
      this.props.history.push("/hotels");
    }
    console.log("serarch value:  ", searchValue);
  };
  render() {
    let { startDate, endDate, destination, adults, children } = this.state;
    console.log(".....state....", this.state);

    return (
      <Container>
        <form onSubmit={this.addOption}>
          <Grid style={{ margin: "0px" }}>
            <Grid.Row columns={1}>
              <Grid.Column>
                <Segment style={{ textAlign: "left", padding: "5px" }}>
                  <Dropdown
                    fluid
                    className="icon"
                    icon="search"
                    selection
                    placeholder="Select Country"
                    onChange={this.handleChange}
                    options={countryOptions}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={4}>
              <Grid.Column>
                <Segment style={{ padding: "5px" }}>
                  <DatePicker
                    isClearable={true}
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeStart.bind(this)}
                    minDate={moment()}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Select an arrival date"
                    name="arrival_date"
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={{ padding: "5px" }}>
                  <DatePicker
                    isClearable={true}
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeEnd.bind(this)}
                    minDate={moment()}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Select a departure date"
                    name="departure_date"
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={{ padding: "5px" }} raised>
                  <Input
                    fluid
                    icon="users"
                    iconPosition="left"
                    type="text"
                    placeholder="ADULTS"
                    name="adults"
                    onChange={this.handleChange}
                    value={adults}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={{ padding: "5px" }}>
                  <Input
                    fluid
                    icon="child"
                    iconPosition="left"
                    type="text"
                    placeholder="CHILDREN"
                    name="children"
                    onChange={this.handleChange}
                    value={children}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <div style={{ margin: " 0 auto", display: "flex" }}>
              <Button positive style={{ padding: "12.5px 5px" }}>
                CHECK AVAILABILITY
              </Button>
            </div>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default SearchBox_3;
