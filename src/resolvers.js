// @flow
import gql from "graphql-tag";
import hotels from "./db";
let users= [
  {id:1,name:"ray",age:"22",email:"a@g.com",img:"",__typename: "UserType"}
];
export const defaults = {
  users: users,
  hotels: hotels
};

let nextId = 2;

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

      const data = {
        users: previous.users.concat([newUser])
      };
      console.log("Previour: ", data);
      cache.writeData({ data });
      return newUser;
    },
    addHotel: (_, { name, email }, { cache }) => {
      // console.log("Mutation: ", name);
      const query = gql`
        query hotels {
          hotels @client {
            id
            name
            email
            price
            distance
            rating
            img
          }
        }
      `;
      const previous = cache.readQuery({ query });
      let maxValueOfId = Math.max(...previous.hotels.map(o => o.id));
      console.log("Previour: ", maxValueOfId);
      const newHotel = {
        id: ++maxValueOfId,
        name,
        email,
        __typename: "Hotels"
      };
      // console.log("Previour: ", newHotel);

      const hotel_data = {
        hotels: previous.hotels.concat([newHotel])
      };
      console.log("Add NewHotel: ", hotel_data);
      cache.writeData({ hotel_data });
      return newHotel;
    }
  }
};
