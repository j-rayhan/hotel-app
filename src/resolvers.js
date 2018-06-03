// @flow
import gql from "graphql-tag";

export const defaults = {
  users: []
};

let nextId = 0;

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

export const resolvers = {
  Mutation: {
    addUser: (_, { name, age, img, email }, { cache }) => {
      const previous = cache.readQuery({ query });
      const newUser = {
        id: nextId++,
        name,
        age,
        img,
        email,
        __typename: "UserType"
      };
      const data = {
        users: previous.users.concate([newUser])
      };
      cache.writeData({ data });
      return newUser;
    }
  }
};
