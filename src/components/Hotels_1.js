// @flow
import React from "react";
import { Query } from "react-apollo";
import { Link } from 'react-router-dom';
import gql from "graphql-tag";

import { Grid, Card, Image, Button, Icon } from "semantic-ui-react";
import CustomMap from "./CustomMap";
import Header from './Header_1';

const GET_HOTELS = gql`
  {
    hotels @client {
      id
      name
      email
      price
      location
      img
      overview
    }
  }
`;

const HotelList = () => (
  <Query query={GET_HOTELS}>
    {({ data: { hotels } }) => (
      <Grid style={{marginTop: '10px'}}>
      <Grid.Column width={4}>
        <CustomMap />
      </Grid.Column>
      <Grid.Column width={12}>
      {hotels.map(hotel => (
          
          <Grid key={hotel.id}>
          <Grid.Column width={16}>
            <Card fluid>
              <Card.Content header={hotel.name} />
              <Card.Content>
                <Grid>
                  <Grid.Column width={4}>
                    <Image src={hotel.img} size="large" target="_blank" />
                  </Grid.Column>
                  <Grid.Column width={9}>
                    {hotel.email}
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
                {hotel.location}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
        ))}
      </Grid.Column>
    </Grid>
       
    )}
  </Query>
);

const HotelListWithHeader = () => (
  <div>
    <Header />
    <HotelList />
  </div>
)

export default HotelListWithHeader;
