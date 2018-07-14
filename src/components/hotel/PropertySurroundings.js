// @flow
import React from "react";
import { Grid, Message, Rating } from "semantic-ui-react";
const PropertySurroundings = props => (
  <Message>
    <Message.Header>
      <h3>Rroperty Surrondings : </h3>
    </Message.Header>
    <br />
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <Message.Header>
            <h4>Attractions: : </h4>
          </Message.Header>
          <Grid>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Message.Header>
            <h4>Transport : </h4>
          </Message.Header>
          <Grid>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
          </Grid>
          <Message.Header>
            <h4>Landmark hotels : </h4>
          </Message.Header>
          <Grid>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
            <Grid.Row>1</Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
  </Message>
);

export default PropertySurroundings;
