// @flow
import React, { Component } from "react";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
// user($id: ID!){

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) @client {
      id
      name
      age
      email
      img
    }
  }
`;

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
class UserFilter extends Component {
  render() {
    const id = this.props.match.params.id;
    const data = this.props.data.users.filter(
      user => parseInt(id, 10) === user.id
    );
    return (
      <div>
        User <h1>Details {"Hello"}</h1>
        {data.map(user => <div key={user.id}>Hi! {user.name}</div>)}
      </div>
    );
  }
}
// const UserFilter = () => (
//   <Query query={GET_USERS}>
//     {({ params }) => (
//       <ul>
//         {
//           //users.filter((user.id !== this.props.match.params.id) => user.name)
//         }
//         {// users
//         // .filter(user => 1 === user.id)
//         // .map(user => <div key={user.id}>{user.name}</div>)
//         console.log("props ", params)}
//       </ul>
//     )}
//   </Query>
// );
class UserDetails_old extends Component {
  state = {};
  render() {
    console.log("====================================");
    console.log(GET_USER);
    console.log("====================================");
    return (
      <Query query={GET_USER}>
        {({ data: { user } }) => (
          <ul>
            <li key={user.id}>
              User Name: {user.name}
              <b to={`/userDetails/${user.id}`}>Delete</b>
            </li>
          </ul>
        )}
      </Query>
    );
  }
}

class UserDetails extends Component {
  state = {};
  render() {
    console.log("====================================");
    console.log(this.props.data.user);
    console.log("====================================");
    return (
      <div>
        User <h1>Details {this.props.data.name}</h1>
      </div>
    );
  }
}

// export default UserDetails;

const withQr = graphql(GET_USER, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(UserDetails);

const withQrr = graphql(GET_USERS)(UserFilter);

export default withQrr;
