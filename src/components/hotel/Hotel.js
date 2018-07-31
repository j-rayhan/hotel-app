// @flow
import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Item, Button, Icon, Grid } from "semantic-ui-react";

import MyCarousel from "./HotelCarousel";
import Overview from "./Overview";
import Facilities from "./Facilities";
import GuestReviews from "./GuestReviews";
import PropertySurroundings from "./PropertySurroundings";
import BookForm from "../book/BookForm";
const GET_HOTELS = gql`
  {
    hotels @client {
      id
      name
      price
      email
      location
      overview
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
        HI Hotel <p>{this.props.match.params.id}</p>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={11}>
              <MyCarousel />
            </Grid.Column>
            <Grid.Column width={5}>
              <BookForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Item.Group>
          {data.map(hotel => (
            <div key={hotel.id}>
              <Item>
                <Item.Content>
                  <Item.Header as="a">{hotel.name}</Item.Header>
                  <Item.Extra>{hotel.price}</Item.Extra>
                  <Overview description={hotel.overview} />
                  <Facilities />
                  <GuestReviews />
                  <PropertySurroundings />
                </Item.Content>
              </Item>
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
