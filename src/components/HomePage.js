// @flow
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Menu,
  Segment,
  Button,
  Image,
  Grid,
  Container,
  Input
} from "semantic-ui-react";
import DatePicker from "react-datepicker";
import moment from "moment";
import Signup from "./signup/SignUp";

// import slide_1 from "../assets/images/carousel/slider-1.jpg";
// import slide_2 from "../assets/images/carousel/slider-2.jpg";
// import logo from "../assets/images/logo/logo-1.png";

class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="assets/images/logo/logo-1.png"
                style={{ marginRight: "1.5em" }}
              />
              HOTEL HOTEL
            </Menu.Item>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Menu.Item>
                <Signup />
              </Menu.Item>
              <Menu.Item>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Log In
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
        <Banner {...this.props} />
      </div>
    );
  }
}

class Banner extends Component {
  state = { startDate: undefined, endDate: undefined };
  handleChangeStart = date => this.setState({ startDate: date });
  handleChangeEnd = date => this.setState({ endDate: date });
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
    return (
      <div
        style={{
          textAlign: "center"
        }}
      >
        <h1 className="app-banner" style={{ paddingTop: "200px" }}>
          WELCOME TO HOTEL BOONING
        </h1>
        <h3>ENJOY YOUR LIFE WITH US!</h3>
        <Container>
          <form onSubmit={this.addOption}>
            <Grid style={{ margin: "0 18px" }}>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Segment style={{ textAlign: "left", padding: "7px" }}>
                    <Input
                      fluid
                      type="text"
                      placeholder="ENTER A DESTINATION OR PROPERTY"
                      name="destination"
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={4}>
                <Grid.Column>
                  <Segment style={{ padding: "7px" }}>
                    <DatePicker
                      isClearable={true}
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
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
                  <Segment style={{ padding: "7px" }}>
                    <DatePicker
                      isClearable={true}
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
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
                  <Segment style={{ padding: "7px" }}>
                    <Input
                      fluid
                      type="text"
                      placeholder="ADULTS"
                      name="adults"
                    />
                  </Segment>
                </Grid.Column>
                <Grid.Column>
                  <Segment style={{ padding: "7px" }}>
                    <Input
                      fluid
                      type="text"
                      placeholder="CHILDREN"
                      name="children"
                    />
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <div style={{ margin: " 0 auto" }}>
                <Button positive style={{ padding: "15px 5px" }}>
                  CHECK AVAILABILITY
                </Button>
              </div>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    showIndicators={false}
    showThumbs={false}
    infiniteLoop={true}
    dynamicHeight={false}
    showArrows={false}
  >
    <div>
      <img alt="slide 1" src="assets/images/carousel/slider-1.jpg" />
    </div>
    <div>
      <img alt="slide 2" src="assets/images/carousel/slider-2.jpg" />
    </div>
    <div>
      <img alt="slide 3" src="assets/images/carousel/slider-1.jpg" />
    </div>
    <div>
      <img alt="slide 4" src="assets/images/carousel/slider-2.jpg" />
    </div>
  </Carousel>
);

const SearchForm = props => (
  <div style={{ position: "absolute", top: "0px", textAlign: "center" }}>
    <MenuExampleInvertedSegment {...props} />
  </div>
);

const HomePage = props => (
  <div style={{ height: "650px", overflowY: "hidden" }}>
    <MyCarousel />
    <SearchForm {...props} />
  </div>
);

export default HomePage;