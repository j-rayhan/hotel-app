// @flow
import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Grid, Card, Image, Button, Icon } from "semantic-ui-react";
import CustomMap from "./CustomMap";

const GET_HOTELS = gql`
  {
    hotels @client {
      id
      name
      price
      distance
      rating
      img
    }
  }
`;
class Hotels extends Component {
  state = {};
  geolocation = () => {
    console.log("..............geolocation........");

    // if (navigator.geolocation) {
    //   navigator.geolocation.watchPosition(this.showPosition);
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
  };

  // showPosition = position => {
  //   let p = {
  //     Latitude: position.coords.latitude,
  //     Longitude: position.coords.longitude
  //   };
  // }
  render() {
    const hotel = this.props.data.hotels.map(hotel => (
      <div key={hotel.id}>
        <Grid>
          <Grid.Column width={16}>
            <Card fluid>
              <Card.Content header={hotel.name} />
              <Card.Content>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src={hotel.img} size="large" target="_blank" />
                  </Grid.Column>
                  <Grid.Column width={9}>
                    {hotel.distance}
                    <div>
                      <Button color="red">{hotel.rating}</Button>
                      {hotel.reviews}
                    </div>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <div>
                      <strong style={{ float: "right" }}>{hotel.price}</strong>
                    </div>
                    <div>
                      <Link to={`/hotel/${hotel.id}`}>
                        <Button floated="right" positive>
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </Grid.Column>
                </Grid>
              </Card.Content>

              <Card.Content extra>
                <Icon name="marker" />
                {hotel.distance}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    ));
    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <CustomMap />
          </Grid.Column>
          <Grid.Column width={12}>{hotel}</Grid.Column>
        </Grid>
      </div>
    );
  }
}

const HotelViewPageWithQuery = graphql(GET_HOTELS)(Hotels);

export default HotelViewPageWithQuery;
