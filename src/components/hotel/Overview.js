// @flow
import React from "react";
import { Message } from "semantic-ui-react";
const Overview = props => (
  <Message>
    <Message.Header size="huge">Overview</Message.Header>
    <p>{props.description}</p>
  </Message>
);

export default Overview;
