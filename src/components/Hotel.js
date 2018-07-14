// @flow
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import {
  Grid,
  Item,
  Button,
  Icon,
  Message,
  Checkbox,
  Rating
} from "semantic-ui-react";

import MyCarousel from "./hotel/HotelCarousel";
import Overview from "./hotel/Overview";
import Facilities from "./hotel/Facilities";
import GuestReviews from "./hotel/GuestReviews";
import PropertySurroundings from "./hotel/PropertySurroundings";
const GET_HOTELS = gql`
  {
    hotels @client {
      id
      name
      price
      distance
      rating
      description
      img
    }
  }
`;

class Hotel extends Component {
  state = {};
  render() {
    const id = this.props.match.params.id;
    const data = this.props.data.hotels.filter(
      hotel => parseInt(id, 10) === hotel.id
    );
    return (
      <div>
        <Item.Group>
          HI Hotel <p>{this.props.match.params.id}</p>
          {data.map(hotel => (
            <div key={hotel.id}>
              <MyCarousel />
              <Item>
                <Item.Content>
                  <Item.Header as="a">{hotel.name}</Item.Header>
                  <Overview description={hotel.description} />
                  <Facilities />
                  <GuestReviews />
                  <PropertySurroundings />
                  <Item.Extra>{hotel.price}</Item.Extra>
                </Item.Content>
              </Item>
              {hotel.img}
            </div>
          ))}
          <Button icon labelPosition="left" onClick={this.goBack}>
            <Icon name="left arrow" />
            Back
          </Button>
        </Item.Group>
      </div>
    );
  }
  goBack = () => {
    this.props.history.push("/hotels");
  };
}

const HotelViewPageWithQuery = graphql(GET_HOTELS)(Hotel);
export default HotelViewPageWithQuery;
