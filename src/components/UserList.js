// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {console.log("Map User List: ", user)}
            User Name: {user.name}
            <Link to={`/userDetails/${user.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    )}
  </Query>
);
//   }
// }

const GET_USER = gql`
  {
    user(id: 1) @client {
      id
      name
      age
      email
      img
    }
  }
`;
const UserList_q =() =>(
  <div>User List</div>
)

const User = () => (
  <Query query={GET_USER}>
    {({ data: { user } }) => <h1>Hello {user}</h1>}
  </Query>
);

export default UserList;
