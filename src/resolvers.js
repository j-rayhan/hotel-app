// @flow
import gql from "graphql-tag";

import hotels from "./db";
export const defaults = {
  users: [],
  hotels: hotels
};

let nextId = 0;

export const resolvers = {
  Mutation: {
    addUser: (_, { name, age, img, email }, { cache }) => {
      // console.log("Mutation: ", name);
      const query = gql`
        query users {
          users @client {
            id
            name
            age
            img
            email
          }
        }
      `;
      const previous = cache.readQuery({ query });
      // console.log("Previour: ", previous.users);
      const newUser = {
        id: nextId++,
        name,
        age,
        img,
        email,
        __typename: "UserType"
      };
      // console.log("Previour: ", newUser);

      const data = {
        users: previous.users.concat([newUser])
      };
      cache.writeData({ data });
      return newUser;
    }
  }
};
