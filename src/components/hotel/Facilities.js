// @flow
import React from "react";
import { Grid, Message, Checkbox } from "semantic-ui-react";
const Facilities = props => (
  <Message>
    <Message.Header>Facilities: </Message.Header>
    <br />
    <Message.Header> Hotel: </Message.Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Car Park - Free" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="BBQ Facilities" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    <br />
    <Message.Header> Leisure: </Message.Header>

    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Car Park - Free" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="BBQ Facilities" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
    <Message.Header> Family : </Message.Header>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Babysitting" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
    <Message.Header> Room : </Message.Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Car Park - Free" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="BBQ Facilities" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Dry Cleaning" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
    <Message.Header> Internet & Business: </Message.Header>
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Business Centre" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Fax / Photocopying" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Internet" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Checkbox label="Wi Fi - Free" disabled defaultChecked />
        </Grid.Column>
        <Grid.Column>
          <Checkbox label="Wi Fi in Public Areas" disabled defaultChecked />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <br />
  </Message>
);

export default Facilities;
