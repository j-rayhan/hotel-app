// @flow
import React from "react";
import { Grid, Message, Rating } from "semantic-ui-react";
const GuestReviews = props => (
  <Message>
    <Message.Header>
      <h3>Guest reviews: </h3>
    </Message.Header>
    <br />
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <p>Guest review score: </p>
        </Grid.Column>
        <Grid.Column>
          <p>Guest review score out of 10, based on 76 reviews from:</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <p>Good: </p>
          <b> 76 reviews</b>
        </Grid.Column>
        <Grid.Column>
          <p>Booking.com 71+ reviews 7.9 out of 10</p>
          <p> Agoda 5+ reviews 7.5 out of 10</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>
            <strong>Cleanliness</strong>
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>
            <strong>Dining </strong>
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>
            <strong>Facilities </strong>
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>
            <strong>Location </strong>
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div>
            <strong>Room </strong>
            <Rating icon="star" defaultRating={3} maxRating={5} />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
  </Message>
);

export default GuestReviews;
