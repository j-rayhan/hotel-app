// @flow
import React, { Component } from "react";

import { Grid, Input } from "semantic-ui-react";

class SearchOption extends Component {
  render() {
    return (
      <div>
        <Grid columns="three" divided>
          <Grid.Row>
            <Grid.Column>
              <CheckIn />
            </Grid.Column>
            <Grid.Column>
              <CheckOut />
            </Grid.Column>
            <Grid.Column>
              <RoomType />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

class CheckIn extends Component {
  render() {
    return (
      <div>
        <Input fluid placeholder="Check In Date" />
      </div>
    );
  }
}

class CheckOut extends Component {
  render() {
    return (
      <div>
        <Input fluid placeholder="Check Out Date" />
      </div>
    );
  }
}

class RoomType extends Component {
  render() {
    return (
      <div>
        <Input
          fluid
          list="room_type"
          placeholder="Room Type"
          icon="user outline"
          iconPosition="left"
        />
        <datalist id="room_type">
          <option value="Single Room" />
          <option value="Double Room" />
          <option value="Family Rooms" />
          <option value="Multiple Rooms" />
        </datalist>
      </div>
    );
  }
}
export default SearchOption;
