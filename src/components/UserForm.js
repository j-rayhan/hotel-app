// @flow

import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_USER_2 = gql`
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

const UserForm_2 = () => (
  <Mutation mutation={ADD_USER_2}>
    {addUser => {
      let name, age, email, img;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              console.log("====================================");
              console.log("====================================");
              addUser({
                variables: {
                  name: name.value,
                  age: age.value,
                  email: email.value,
                  img: img.value
                }
              });
              // .then(res => {
              //   console.log("====================================");
              //   console.log(this.props.history.push("/"));
              //   console.log("====================================");
              // });
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

// export default UserForm;

const ADD_USER = gql`
  mutation addUser($name: String!, $age: Int!) {
    addUser(name: $name, age: $age) @client {
      id
    }
  }
`;

const UserForm = () => (
  <Mutation mutation={ADD_USER}>
    {addUser => {
      let input, age;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addUser({ variables: { name: input.value, age: age.value } });
              input.value = "";
              age.value = "";
            }}
          >
            Name:{" "}
            <input
              ref={node => {
                input = node;
              }}
            />
            Age:{" "}
            <input
              ref={node => {
                age = node;
              }}
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      );
    }}
  </Mutation>
);

export default UserForm_2;
