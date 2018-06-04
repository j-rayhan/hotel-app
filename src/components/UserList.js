// @flow
import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_USERS = gql`
  {
    users @client {
      id
      name
      age
      email
      img
    }
  }
`;

// class UserList extends Component {
//   state = {};
//   render() {
//     return (

const UserList = () => (
  <Query query={GET_USERS}>
    {({ data: { users } }) => (
      <ul>{users.map(user => <li key={user.id}>Uer Name: {user.name}</li>)}</ul>
    )}
  </Query>
);
//   }
// }

export default UserList;
