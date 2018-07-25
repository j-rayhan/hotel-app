// @flow

import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_USER = gql`
  mutation addUser($name: String!, $age: Int!, $email: String!, $img: String!) {
    addUser(name: $name, age: $age, email: $email, img: $img) @client {
      id
    }
  }
`;

// class UserForm extends Component {
//   state = {};
//   render() {
//     return (

const UserForm = (props) => (
  <Mutation mutation={ADD_USER}>
    {addUser => {
      let name, age, email, img;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addUser({
                variables: {
                  name: name.value,
                  age: age.value,
                  email: email.value,
                  img: img.value
                }
              });
              props.history.push("/users");
            }}
          >
            Name:
            <input
              ref={v => {
                name = v;
              }}
            />
            Age:
            <input
              ref={v => {
                age = v;
              }}
            />
            Email:
            <input
              ref={v => {
                email = v;
              }}
            />
            Image:
            <input
              ref={v => {
                img = v;
              }}
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      );
    }}
  </Mutation>
);
//   }
// }

export default UserForm;
